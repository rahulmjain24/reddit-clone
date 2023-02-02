import { DOWN_VOTE, LOGOUT, QUERY, SHOW_FORM, UPDATE_DATA, UPDATE_REDDIT, UP_VOTE } from "./actionTypes";

export const setUserDataDispatch = {
    setData: (payload) => ({
        type: UPDATE_DATA,    
        payload: {...payload}
    }),
    manageForm: () => ({
        type: SHOW_FORM
    }),
    logout: () => ({
        type: LOGOUT
    })
}

export const setRedditDataDispatch = {
    upVote: (id, value) => ({
        type: UP_VOTE,
        id,
        value
    }),
    downVote: (id, value)=> ({
        type: DOWN_VOTE,
        id,
        value
    }),
    setQuery: (query) => ({
        type: QUERY,
        query
    }),
    updateData: (id, data) => ({
        type: UPDATE_REDDIT,
        id,
        data
    })
}