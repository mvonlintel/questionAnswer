import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuestionList from './QuestionList';
import ConfigHeader from '../common/ConfigHeader';
import * as questionActions from '../../actions/questionActions';

class HomePage extends React.Component { 
    constructor(props, context) {
        super(props, context);

        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(event) {
        this.props.actions.deleteQuestion(event.target.id);
    }

    render() {
        return (
            <div className="container">
                <ConfigHeader />
                <QuestionList questions={this.props.questions} onDelete={this.onDelete} />
            </div>
        );
    }
}

HomePage.propTypes = {
    questions: PropTypes.array.isRequired,
    actions: PropTypes.object,
    deleteQuestion: PropTypes.func
};

function mapStateToProps(state, ownProps){
    return {
        questions: state.questions
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(questionActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);