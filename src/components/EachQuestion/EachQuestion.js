import React from 'react';
import './EachQuestion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons'

const EachQuestion = ({ Question }) => {
    const { options, id, question, correctAnswer } = Question;
    console.log(correctAnswer);
    console.log(Question)

    const radioButtoValue = (id) => {
        if (id === correctAnswer) {
            // alert('you are right');
            toast.success("You are right", { position: "top-center" });
        }
        else if (id !== correctAnswer) {
            toast.error("You are wrong", { position: "top-center" });
        }
    }


    const rightAnswer = (x) => {
        toast.info(` Right Answer: ${x}`, { position: "top-center" });
        console.log(x)
    }



    return (
        <div className='quiz'>
            <div className='name-icon'>
                <div>
                    <h3>{question}</h3>
                </div>
                <div >
                    <button onClick={() => rightAnswer(correctAnswer)} className='icon'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                </div>
            </div>
            <div >

                {
                    options.map(option => <div onClick={() => radioButtoValue(option)} className='options'> <input type="radio" id="html" name={id} value={option} />{option}</div>)

                }

                < ToastContainer />

            </div>

        </div>

    );
};

export default EachQuestion;