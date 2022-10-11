import React from 'react';

const QuestionSeet = ({ singleQuestion }) => {
    // console.log(singleQuestion);
    const { correctAnswer, options,question } = singleQuestion
    console.log(question);
    return (
        <div>
            <p>{question}</p>
            <div className='bg-slate-400'>
                <p><small>{options.map(q => <li>{q}</li>)}</small></p>
            </div>
        </div>
    );
};

export default QuestionSeet;