import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const Question = ({question, onDelete}) => { 

    let styles = {cursor:'pointer', color: 'red', 'padding-right': '4px'};

    return (
        <div>
            <span style={styles} onClick={onDelete} id={question.id} className="glyphicon glyphicon-remove"></span>
            <Link to={"config/" + question.id}>{question.name}</Link>
        </div>
    )
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    onDelete: PropTypes.func
}

export default Question;