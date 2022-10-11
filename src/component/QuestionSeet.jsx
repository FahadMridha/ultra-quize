import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {EyeIcon } from '@heroicons/react/24/solid'

const QuestionSeet = ({ singleQuestion }) => {
    // console.log(singleQuestion);
    const { correctAnswer, options,question } = singleQuestion
    // console.log(correctAnswer);
    const Answer = correctAnswer
    const rightAnswer=()=>toast.success("Your ans is Correct")
    const wrongAnswer=()=>toast.error("Your ans is wrong")
    const handlerAnswer=(selecetedValue)=>{
        // console.log(selecetedValue);
        if (selecetedValue === correctAnswer){
           rightAnswer()
        }
        else{
            wrongAnswer()
        }
    }
    const notify2 = () => toast(`The correct answer is:${Answer}`, {
        position: "top-center",
        theme: 'dark'
    });
    return (
        <div>
            <div className='bg-green-400 py-4 flex justify-between mx-10'>
                <p>{question}</p>
                <button>
                    <EyeIcon onClick={notify2} className="h-4 w-4 text-orange-400" />
                    <ToastContainer />
                </button>
                
            </div>
            <div className='bg-slate-200 m-10 p-10 '>
                {
                    options.map((option,_idx)=>
                        <label><input onClick={() => handlerAnswer(option)} type="radio" name="quiz" id={_idx} /> {option}</label>  )
                }
                {/* <p><small>
                    {options.map(q => <div onClick={() => answerHandler(optionsArray)}>{q}</div>)}</small>
                    </p>
                <ToastContainer/> */}
            </div>
        </div>
    );
};

export default QuestionSeet;