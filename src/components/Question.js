import React, {useEffect, useState} from 'react';

function Question() {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=10&category=11")
            .then(response => response.json())
            .then( data => {
                setQuestion(data.results[0]);
                setLoading(false);
            });
    }, []);

    function handleResponse(evt) {
        const text = evt.target.innerText;

        setResult(text === question.correct_answer);
    }

    function getPossibleAnswers() {
        const answers = [];
        answers.push(...question.incorrect_answers);
        answers.push(question.correct_answer);

        return answers.map((answer) => <div><button onClick={handleResponse}>{answer}</button></div>);
    }

    return (
        <div>
            <div>{loading ? 'Loading...' : decodeURI(question.question)}</div>
            <div>{!loading && getPossibleAnswers(question)}</div>
            <div>{result ? 'Good answer!' : 'Bad answer'}</div>
        </div>
    );
}

export default Question;