import React from 'react';
import './EachQuestion.css'

const EachQuestion = ({ Question }) => {
    const { options, id, question, correctAnswer } = Question;
    console.log(Question)
    return (
        <div className='quiz'>
            <div>
                <h3>{question}</h3>
            </div>
            <div >
                {
                    options.map(option => <div className='options'> <input type="radio" id="html" name="fav_language" value={option} />{option}</div>)


                }

            </div>
        </div>
    );
};

export default EachQuestion;