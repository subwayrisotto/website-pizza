import { act } from "react-dom/test-utils";
import { actions } from "react-redux-form";
import * as ActionType from './ActionTypes';
 

export const Comments = (state = {
        errMess: null,
        comments: []
    }, action) => {
    switch(action.type){

        case ActionType.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionType.COMMENTS_FAIELD:
            return {...state, isLoading: false, errMess: action.payload, comments: []};

        case ActionType.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();

            return {...state, comments: state.comments.concat(comment)};

        default: 
            return state;
    }
}