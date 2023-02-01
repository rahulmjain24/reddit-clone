import { UPDATE_DATA } from "../actionTypes";

const initialState = {
    email: '',
    username: '',
    password: ''
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case UPDATE_DATA: {
            const payload = action.payload
            return {
                ...state,
                ...payload
            }
        }
        default:
            return state;
    }
}
