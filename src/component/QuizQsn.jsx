import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionSeet from './QuestionSeet';

const QuizQsn = () => {
    const quiz=useLoaderData()
    // console.log(quiz.data.questions);
    const questions = quiz.data.questions
    return (
        <div>
            <h1>question : {questions.length}</h1>
            {
                questions.map(singleQuestion=><QuestionSeet 
                    key={singleQuestion.id}
                    singleQuestion={singleQuestion}
                />)
            }
        </div>
    );
};

export default QuizQsn;