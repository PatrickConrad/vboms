import {types} from "./types";
import axios from 'axios';

const auth = {
    register: (dispatch) => () => {
             dispatch({
                type: types.REQUEST_SIGN_UP,
                payload: {message: "hello"}
            })
    },
    login: (dispatch) => (user) => {
        console.log("login", user)
    },
    register: (dispatch) => () => {
        console.log("signing up")
    }
}


export default auth