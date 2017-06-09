import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextInput from '../common/TextInput';
import { bindActionCreators } from 'redux';
import * as answerActions from '../../actions/answerActions';

class AnswerPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isValid: false,
            currentResponse: ''
        };

        this.checkAnswer = this.checkAnswer.bind(this);
        this.onChange = this.onChange.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.answer !== this.props.answer) {
            this.setState({isValid: nextProps.answer.isValid});
        }
    }

    onChange(event) {
        let val = event.target.value;
        this.setState(Object.assign({}, {currentResponse: val}) );
    }

    checkAnswer() {
        let val = this.state.currentResponse;
        let regex = new RegExp(this.props.currentQuestion.validation.replace(/, /g, "|"), "i");
        let result = (val.match(regex) != null);
        
        this.setState(Object.assign({}, {isValid: result, showAnswer: true }) );
    }

    resetLocalState() {
        this.setState({
            isValid: false,
            currentResponse: '',
            showAnswer: false
        });
    }

    nextQuestion() {
        this.props.actions.nextQuestion();
        this.resetLocalState();
    }

    restart() {
        this.props.actions.restart();
        this.resetLocalState();
    }

    render() {
        let question = this.props.currentQuestion;
        let questionNumber = this.props.answer.index + 1;
        let isLastQuestion = questionNumber === this.props.questions.length;
        return (
            <div className="container">
                <h1>Questions</h1>
                <p>Question {questionNumber} of {this.props.questions.length}</p>
                {question && 
                    <div>
                        <TextInput 
                            name="answer" 
                            label={question.name}
                            onChange={this.onChange}
                            value={this.state.currentResponse} />
                    </div>
                }
                {!this.state.showAnswer && <button className="btn btn-primary" onClick={this.checkAnswer}>Check Answer</button>}
                {this.state.showAnswer &&
                    (<div> 
                        <div className={this.state.isValid ? "alert alert-success" : "alert alert-danger"}>{question.display}</div>         
                    </div>)
                }

                {this.state.showAnswer && !isLastQuestion && <button onClick={this.nextQuestion} className="btn btn-primary">Next Question</button>}
                {this.state.showAnswer && isLastQuestion && <button onClick={this.restart} className="btn btn-primary">Start Again</button>}
            </div>
        );
    }
} 

AnswerPage.propTypes = {
    questions: PropTypes.array.isRequired,
    answer: PropTypes.object.isRequired,
    currentQuestion: PropTypes.object,
    actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    let currentQuestion = state.questions.length > state.answer.index ? state.questions[state.answer.index] : null;
    return { 
        questions: state.questions,
        answer: state.answer,
        currentQuestion: currentQuestion
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(answerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPage);