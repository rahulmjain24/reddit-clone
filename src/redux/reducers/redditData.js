import { API_STATES, DOWN_VOTE, QUERY, SET_DATA, UPDATE_REDDIT, UP_VOTE } from "../actionTypes";

const initialState = {
    query: '',
    posts : [],
    API_STATE: API_STATES.LOADING
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                posts: [
                    ...action.data
                ],
                API_STATE: action.state
            }
        }
        case UP_VOTE: {
            const posts = state.posts
            const post = posts.find((post) => {
                return post.id === action.id
            })
            post.votes+=action.value
            return {
                ...state,
                posts: [
                    ...posts,
                ]
            }
        }
        case DOWN_VOTE: {
            const posts = state.posts
            const post = posts.find((post) => {
                return post.id === action.id
            })
            post.votes += action.value
            return {
                ...state,
                posts: [
                    ...posts,
                ]
            }
        }
        case QUERY: {
            return {
                ...state,
                query: action.query
            }
        }
        case UPDATE_REDDIT: {
            const posts = state.posts
            const post = posts.find((post) => {
                return post.id === action.id
            })
            if(action.data.title) {
                post.title = action.data.title
            }
            if(action.data.post) {
                post.post = action.data.post
            }
            if(action.data.image) {
                post.image = action.data.image
            }

            return {
                ...state,
                posts: [
                    ...state.posts
                ]
            }
        }
        default:
            return state;
    }
}
