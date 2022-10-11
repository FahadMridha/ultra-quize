import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {EyeIcon } from '@heroicons/react/24/solid'

const QuestionSeet = ({ singleQuestion, _idx }) => {
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
        <div className=''>
            <div className='bg-gray-300 py-4 flex justify-between mx-10'>
                <p>Quiz {_idx+1}:{question}</p>
                <button>
                    <EyeIcon onClick={notify2} className="h-8 w-8 text-orange-400" />
                    <ToastContainer />
                </button>
                
            </div>
            <div className=' m-10 p-10 border-solid'>
                {
                    options.map((option,_idx)=>
                        <label ><input className='grid grid-cols-2' onClick={() => handlerAnswer(option)} type="radio" name="quiz" id={_idx} /> {option}</label>  )
                }
            </div>
        </div>
    );
};

export default QuestionSeet;