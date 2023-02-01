import { DOWN_VOTE, SHOW_FORM, UPDATE_DATA, UP_VOTE } from "./actionTypes";

export const setUserDataDispatch = {
    setData: (payload) => ({
        type: UPDATE_DATA,    
        payload: {...payload}
    }),
    manageForm: () => ({
        type: SHOW_FORM
    })
}

export const setRedditDataDispatch = {
    upVote: (id) => ({
        type: UP_VOTE,
        id
    }),
    downVote: (id)=> ({
        type: DOWN_VOTE,
        id
    })
}