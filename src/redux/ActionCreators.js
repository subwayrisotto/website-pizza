import * as ActionType from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionType.ADD_COMMENT,
    /*полезная загрузка*/payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    } 
});