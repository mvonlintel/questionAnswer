import * as types from '../actions/actionTypes'
import initialState from './initialState';

function storeQuestions(questions) {
    localStorage["questions"] = JSON.stringify(questions);
    return questions;
}

export default function questionReducer(state = initialState.questions, action) {
    switch(action.type){
        case types.LOAD_QUESTIONS:
            state = JSON.parse(localStorage["questions"]);
            return state;
        case types.CREATE_QUESTION:
            return storeQuestions([...state, 
                Object.assign({}, action.question)
            ]);
        case types.UPDATE_QUESTION:
            return storeQuestions([
                ...state.filter(question => question.id != action.question.id),
                Object.assign({}, action.question)
            ]);
        case types.DELETE_QUESTION:
            return storeQuestions([
                ...state.filter(question => question.id != action.id)
            ]);
        default: 
            return state;
    }

}