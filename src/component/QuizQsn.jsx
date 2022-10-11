import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionSeet from './QuestionSeet';

const QuizQsn = () => {
    const quiz=useLoaderData()
    // console.log(quiz.data.questions);
    console.log(quiz.data.name);
    const questions = quiz.data.questions
    return (
        <div>
            <h1 className=' text-center text-2xl font-bold text-orange-400 my-7'>Quiz of {quiz.data.name}</h1>
            <div>
                {
                    questions.map(singleQuestion => <QuestionSeet
                        key={singleQuestion.id}
                        singleQuestion={singleQuestion}
                    />)
                }
            </div>
        </div>
    );
};

export default QuizQsn;