import React from 'react';
import './EachQuestion.css'

const EachQuestion = ({ Question }) => {
    const { options, id, question, correctAnswer } = Question;
    console.log(Question)

    const radioButtoValue = (id) => {
        if (id === correctAnswer) {
            alert('you are right');
        }
        else if (id !== correctAnswer) {
            alert('you are wrong')
        }

    }

    return (
        <div className='quiz'>
            <div>
                <h3>{question}</h3>
            </div>
            <div >
                {
                    options.map(option => <div onClick={() => radioButtoValue(option)} className='options'> <input type="radio" id="html" name="fav_language" value={option} />{option}</div>)



                }

            </div>
        </div>
    );
};

export default EachQuestion;