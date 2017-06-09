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
            console.log("CREATE Question", state, action.question);
            const questions = [...state, 
                Object.assign({}, action.question)
            ];
            return storeQuestions(questions);

        case types.UPDATE_QUESTION:
            console.log("Update Question", state, action.question);
            const q = [
                ...state.filter(question => question.id != action.question.id),
                Object.assign({}, action.question)
            ];
            return storeQuestions(q);
        case types.DELETE_QUESTION:
            console.log("Delete Question", state, action.id);
            const a = [
                ...state.filter(question => question.id != action.id)
            ];
            return storeQuestions(a);
        default: 
            return state;
    }

}