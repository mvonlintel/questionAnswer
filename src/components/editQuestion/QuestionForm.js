import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';

const QuestionForm = ({question, onChange, onSave, errors, loading}) => {
    return (
        <div>
            <input type="hidden" name="id" value={question.id} />
            <TextInput name="name" label="Question Name" onChange={onChange} value={question.name} />
            <TextInput name="display" label="Answer Display" onChange={onChange} value={question.display} />
            <TextInput name="validation" label="Correct Answers Comma Separated" onChange={onChange} value={question.validation} />
            <input type="submit" className="btn btn-primary" value={loading ? "Saving..." : "Save"} onClick={onSave} /> 
        </div>
    );
}

QuestionForm.propTypes = {
    question: PropTypes.object,
    onChange: PropTypes.func,
    onSave: PropTypes.onSave,
    errors: PropTypes.array,
    loading: PropTypes.bool
}

export default QuestionForm;