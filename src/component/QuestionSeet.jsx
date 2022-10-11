import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {EyeIcon } from '@heroicons/react/24/solid'

const QuestionSeet = ({ singleQuestion }) => {
    // console.log(singleQuestion);
    const { correctAnswer, options,question } = singleQuestion
    // console.log(correctAnswer);
    const Answer = correctAnswer
    const optionsArray=options
    const answerHandler=(answer)=>{
// console.log(answer);
        if(answer){
            answer[1]=true
        }
        else{
            const notify = () => toast("Wow so false!", {
                position: "top-center",
                theme: 'dark'
            });
        }
    }
    // const notify = () => toast("Wow so easy!", {
    //     position: "top-center",
    //     theme: 'dark'
    // });
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
            <div className='bg-slate-400 mx-10'>
                <p><small>
                    {options.map(q => <div onClick={() => answerHandler(optionsArray)}>{q}</div>)}</small>
                    </p>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default QuestionSeet;