import { combineReducers } from 'redux';
import questions from './questionReducer';
import answer from './answerReducer';

const rootReducer = combineReducers({
    questions,
    answer
});

export default rootReducer;
