import  React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link } from 'react-router';
import * as questionActions from '../../actions/questionActions';
import QuestionForm from './QuestionForm';
import toastr from 'toastr';
import ConfigHeader from '../common/ConfigHeader';

class EditQuestionPage extends React.Component { 
    constructor(props, context) {
        super(props, context);

        this.state = {
            question: Object.assign({}, this.props.question),
            errors: {},
            loading: false
        };

        this.updateQuestionState = this.updateQuestionState.bind(this);
        this.saveQuestion = this.saveQuestion.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.question.id != nextProps.question.id) {
            this.setState({question: Object.assign({}, nextProps.question)});
        }
    }
    

    updateQuestionState(event) {
        const field = event.target.name;
        let question = this.state.question;
        question[field] = event.target.value;
        this.setState({ question: question });
    }

    saveQuestion() {
        this.state.loading = true;
        this.props.actions.updateQuestion(this.state.question);
        this.context.router.push('/home');
        toastr.success("Question saved success!")
    }

    render() {
        return (
            <div className="container">
                <ConfigHeader />
                <h2>Add/Update Question</h2>
                <QuestionForm 
                    question={this.state.question} 
                    onChange={this.updateQuestionState}
                    onSave={this.saveQuestion}
                    errors={this.state.errors}
                    loading={this.state.loading} />
            </div>
        );
    }
}

EditQuestionPage.propTypes = {
    question: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

EditQuestionPage.contextTypes = {
    router: PropTypes.object
}

function getQuestionById(state, id) {
    const question = state.questions.filter(q => q.id == id);
    if(question.length) return question[0];
    
    return null;
}

function mapStateToProps(state, ownProps){
    const questionId = ownProps.params.id;

    let question = { id: new Date().getTime(), name: '', validation: '', display: '' }

    if(questionId && state.questions.length){ 
        question = getQuestionById(state, questionId);
    }

    return {
        question: question
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(questionActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionPage);