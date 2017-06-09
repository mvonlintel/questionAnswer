import * as types from '../actions/actionTypes'
import initialState from './initialState';

export default function answerReducer(state = initialState.answer, action) {
    switch(action.type){
        case types.NEXT_QUESTION:
            return Object.assign({}, state, {index: state.index + 1 });
        case types.RESTART_QUESTIONS:
            return Object.assign({}, state, {index: 0 });
        default:
            return state;
    }
}