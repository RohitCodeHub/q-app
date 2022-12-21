import { combineReducers } from "redux";
import Userreducer from '../Reducer/User';
import TimeReducer from "../Reducer/TimeReducer";
import ThemeReducer from "../Reducer/ThemeReducer";
import LoginStateReducer from "../Reducer/LoginStateReducer";

const rootReducer = combineReducers({
    Userreducer ,
    TimeReducer ,
    ThemeReducer ,
    LoginStateReducer
})

export default rootReducer
