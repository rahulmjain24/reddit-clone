import { SHOW_FORM, UPDATE_DATA } from "../actionTypes";

const initialState = {
    data: {
        email: '',
        username: '',
        password: ''
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
                    ...payload
                }
            }
        }
        case SHOW_FORM: {
            return {
                ...state,
                showForm: !state.showForm
            }
        }
        default:
            return state;
    }
}
