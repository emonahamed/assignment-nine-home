import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachQuestion from '../EachQuestion/EachQuestion';

const QuizDetails = () => {
    const Quizs = useLoaderData().data;
    const Questions = Quizs.questions;
    console.log(Questions.id)
    // console.log(Quizs)
    // console.log(Questions);



    return (
        <div>
            <h2>Quiz of {Quizs.name}</h2>
            {
                Questions.map((Question, index) => <EachQuestion
                    key={Question.id}
                    Question={Question}
                    index={index}
                >


                </EachQuestion>)
            }

        </div>
    );
};

export default QuizDetails;