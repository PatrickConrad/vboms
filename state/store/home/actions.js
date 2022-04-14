import { REQUEST_LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE, REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REQUEST_SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE} from "./types";
import axios from 'axios';

const auth = {
    logout: (dispatch) => () => {
             dispatch({
                type: LOGOUT_SUCCESS,
                payload: false
            })
    },
    login: (dispatch) => () => {
        dispatch({
                type: LOGIN_SUCCESS,
                payload: true
            })
    }
}


export default auth