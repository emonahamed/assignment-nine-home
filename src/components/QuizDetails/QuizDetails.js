import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachQuestion from '../EachQuestion/EachQuestion';

const QuizDetails = () => {
    const Quizs = useLoaderData().data;
    const Questions = Quizs.questions;
    console.log(Questions)
    // console.log(Quizs)
    // console.log(Questions);



    return (
        <div>
            <h2>Quiz of {Quizs.name}</h2>
            {
                Questions.map(Question => <EachQuestion
                    key={Question.id}
                    Question={Question}
                >


                </EachQuestion>)
            }

        </div>
    );
};

export default QuizDetails;