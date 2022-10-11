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
    const notify = () => toast(`The correct answer is:${Answer}`, {
        position: "top-center",
        theme: 'dark'
    });
    return (
        <div className='border border-indigo-600 my-4 mx-10'>
            <div className=' flex justify-between  bg-gray-300 py-4'>
                <p className='px-5 text-xl'> <span className='font-bold'>Quiz {_idx + 1}:</span> {question}</p>
                <button className='px-5'>
                    <EyeIcon onClick={notify} className="h-8 w-8 text-orange-400" />
                    <ToastContainer />
                </button>
                
            </div>
            <div className='grid p-10'>
                {
                    options.map((option,_idx)=>
                        <label ><input onClick={() => handlerAnswer(option)} type="radio" name="quiz" id={_idx} /> {option}</label>  )
                }
            </div>
        </div>
    );
};

export default QuestionSeet;