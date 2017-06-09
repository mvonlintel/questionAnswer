import * as types from './actionTypes';

export function loadQuestions() {
    return { type: types.LOAD_QUESTIONS }
}

export function createQuestion(question){
    return { type: types.CREATE_QUESTION, question }
}

export function updateQuestion(question){
    return { type: types.UPDATE_QUESTION, question } 
}

export function deleteQuestion(id){
    return { type: types.DELETE_QUESTION, id }
}