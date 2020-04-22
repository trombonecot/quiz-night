import React, {useEffect, useState} from 'react';

function Quiz() {
    const [result, setResult] = useState("");


    function handleResponse(result) {
        setResult(result);
    }

    return (
        <div>
            
            <Question handleResponse={handleResponse} />
        </div>
    );
}

export default Question;