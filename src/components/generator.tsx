import React, {useEffect, useState} from 'react';
import {fetchQuestions} from "../services/TriviaServices";
import {Question} from "../models/Question";

function Generator() {
    const [randomNum, setRandomNum] = useState(0);
    const [questionArray, setQuestionArray] = useState<Question[]>([]);
    console.log(questionArray);
    

    useEffect( ()=> {
        setRandomNum(Math.floor(Math.random() * questionArray.length));
    }, [])

    return(
        <div>
            {randomNum}
            {questionArray}
            {questionArray[randomNum]}
        </div>
    )
}


export default Generator;