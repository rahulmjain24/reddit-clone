import { combineReducers } from "redux";
import userData from "./userData";
import redditData from "./redditData";

export default combineReducers({
    userData,
    redditData
});

