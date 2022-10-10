import React from 'react';

const QuestionSeet = ({ singleQuestion }) => {
    console.log(singleQuestion);
    const { correctAnswer, options,question } = singleQuestion
    return (
        <div>
            <p>{question}</p>
            
            <p><small>{options.map(q => <li>{q}</li>)}</small></p>
        </div>
    );
};

export default QuestionSeet;