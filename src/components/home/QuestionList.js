import React, { PropTypes } from 'react';
import Question from './Question';

const QuestionList = ({questions, onDelete}) => { 
    return (
        <div>
            <h2>Questions</h2>
            <p>Displaying {questions.length} questions.</p>
            
            {questions.map(question => 
                <div key={question.id}>
                    <Question question={question} onDelete={onDelete} />
                    <br/>
                </div>
            )}
            
        </div>
    )
}

QuestionList.propTypes = {
    questions: PropTypes.array.isRequired,
    onDelete: PropTypes.func
}

export default QuestionList;