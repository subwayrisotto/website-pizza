import { act } from "react-dom/test-utils";
import { actions } from "react-redux-form";
import { COMMENTS } from "../shared/comments";
import * as ActionType from './ActionTypes';
 

export const Comments = (state = COMMENTS, action) => {
    switch(action.type){

        case ActionType.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();

            return state.concat(comment);

        default: 
            return state;
    }
}