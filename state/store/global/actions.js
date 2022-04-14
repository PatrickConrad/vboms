import { REQUEST_LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE, REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REQUEST_SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE} from "./types";
import axios from 'axios';

const global = {
    setLoading: (dispatch) => () => {
             dispatch({
                type: "LOADING_OFF",
                payload: false
            })
    },
    lo3gin: (dispatch) => () => {
        dispatch({
                type: "login",
                payload: true
            })
    }
}


export default global