import * as types from './actionTypes';

export function nextQuestion(){
    return { type: types.NEXT_QUESTION }
}

export function restart() {
    return { type: types.RESTART_QUESTIONS } 
}

