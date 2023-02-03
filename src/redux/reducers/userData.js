import { DOWN_VOTE, LOGOUT, SHOW_FORM, UPDATE_DATA, UP_VOTE } from "../actionTypes";

const initialState = {
    data: {
        email: '',
        username: '',
        password: '',
        isLoggedIn: false,
        upVoted: [],
        downVoted: []
    },
    showForm: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATA: {
            const payload = action.payload
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload,
                }
            }
        }
        case SHOW_FORM: {
            return {
                ...state,
                showForm: !state.showForm
            }
        }
        case LOGOUT: {
            return {
                ...state,
                data : {
                    ...state.data,
                    email: '',
                    username: '',
                    password: '',
                    isLoggedIn: false
                }
            }
        }
        case UP_VOTE:{
            let upVoted = [...state.data.upVoted]
            let downVoted = [...state.data.downVoted]
            if(state.data.upVoted.includes(action.id)) {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        upVoted: [
                            ...upVoted.filter((id) => {
                                return action.id !== id
                            })
                        ]
                    }
                }
            } else {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        upVoted: [
                           ...upVoted,
                           action.id
                        ],
                        downVoted: [
                            ...downVoted.filter((id) => {
                                return action.id !== id
                            })
                        ]
                    }
                }
            }
        }
        case DOWN_VOTE:{
            let downVoted = [...state.data.downVoted]
            let upVoted = [...state.data.upVoted]
            if(state.data.downVoted.includes(action.id)) {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        downVoted: [
                            ...downVoted.filter((id) => {
                                return action.id !== id
                            })
                        ]
                    }
                }
            } else {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        downVoted: [
                           ...downVoted,
                           action.id
                        ],
                        upVoted: [
                            ...upVoted.filter((id) => {
                                return action.id !== id
                            })
                        ]
                    }
                }
            }
        }
        default:
            return state;
    }
}
