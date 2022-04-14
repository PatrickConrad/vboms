import {types} from "./types";
import axios from 'axios';

const auth = {
    twoPointLogin: (dispatch)=> async (twoPointInfo) => {
        console.log("INFO", twoPointInfo)
        try{
            if(!twoPointInfo.type || !twoPointInfo.token) {
                console.log("NO type, no token")
                 return dispatch({
                    type: types.TWO_POINT_LOGIN_FAILURE,
                    payload: {
                        message: "Include all required info",
                        code: 402
                    }
                })
            }
            let res;
            if(twoPointInfo.type === 'email'){
                console.log("EMAIL, type")
                res = await axios.put(`http://localhost:8081/api/v1/secondary-auth/login-email/${twoPointInfo.token}`)
            }
            else{
                if(!twoPointInfo.pin) {
                    console.log("NO pin error")
                    return dispatch({
                        type: types.TWO_POINT_LOGIN_FAILURE,
                        payload: {
                            message: "Must include pin",
                            code: 402
                        }
                    })
                }
                res = await axios.put(`http://localhost:8081/api/v1/secondary-auth/login-pin/${twoPointInfo.token}`, {pin: twoPointInfo.pin}, {withCredentials: true})
            }
            if(!res) {
                console.log("NO response")
                return dispatch({
                    type: types.TWO_POINT_LOGIN_FAILURE,
                    payload: {
                        message: "No response from server for two point authentication",
                        code: 500
                    }
                })
            }
            console.log("RESPONSE: ", res)
            if(!res.data.success) return dispatch({
                type: types.TWO_POINT_LOGIN_FAILURE,
                payload: {
                    message: "ERROR NEED message",
                    code: 500
                }
            })
            console.log("RESPONSE2: ", res)

            dispatch({
                type: types.TWO_POINT_LOGIN_SUCCESS,
                payload: res
            })
        }
        catch(err){
            dispatch({
                type: types.TWO_POINT_LOGIN_FAILURE,
                payload: {
                    message: err.message,
                    code: 500
                }
            })
        }
    },
    checkAuth: (dispatch)=> async()=>{
        try{
            dispatch({
                type: types.REQUEST_CHECK_AUTH
            })
            const cookies = document.cookie;
            const exists = cookies.indexOf("access=")
            const exists2 = cookies.indexOf("refresh=")
            if(exists === -1 && exists2 === -1){
                return dispatch({
                    type: types.CHECK_AUTH_NOT_LOGGED_IN
                })
            }
            const res = await axios.get('http://localhost:8081/api/v1/auth/update-access', { withCredentials: true });
            if(!res || !res.data.success){
                return dispatch({
                    type: types.CHECK_AUTH_FAILURE,
                    payload: {
                        message: "No response from server",
                        resCode: 500
                    }
                })
            }
            dispatch({
                type: types.CHECK_AUTH_SUCCESS,
                payload: res.data
            })
        }
        catch(err){
            dispatch({
                type: types.CHECK_AUTH_FAILURE,
                payload: {
                    message: err.message,
                    resCode: 500
                }
            })
        }
       
       
    },
    forgotPassword: (dispatch)=> async(user)=>{
        try{
            dispatch({
                type: types.REQUEST_FORGOT_PASSWORD
            })
            const res = await axios.put('http://localhost:8081/api/v1/auth/forgot-password', {...user});
            if(!res || !res.data.success){
                return dispatch({
                    type: types.FORGOT_PASSWORD_FAILURE,
                    payload: {
                        message: "No response from server",
                        resCode: 500
                    }
                })
            }
            dispatch({
                type: types.FORGOT_PASSWORD_SUCCESS,
                payload: res.data
            })
        }
        catch(err){
            dispatch({
                type: types.FORGOT_PASSWORD_FAILURE,
                payload: {
                    message: err.message,
                    resCode: 500
                }
            })
        }
       
       
    },
    resetPassword: (dispatch)=> async(info)=>{
        try{
            dispatch({
                type: types.REQUEST_RESET_PASSWORD
            })
            const res = await axios.put(`http://localhost:8081/api/v1/auth/reset-password/${info.token}`, {password: info.newPassword});
            if(!res){
                return dispatch({
                    type: types.RESET_PASSWORD_FAILURE,
                    payload: {
                        message: "No response from server",
                        resCode: 500
                    }
                })
            }
            console.log("RESPONSE REset", res);
            dispatch({
                type: types.RESET_PASSWORD_SUCCESS,
                payload: res.data
            })
        }
        catch(err){
            dispatch({
                type: types.RESET_PASSWORD_FAILURE,
                payload: {
                    message: err.message,
                    resCode: 500
                }
            })
        }
       
       
    },
    register: (dispatch) => async (user) => {
        try{
            dispatch({
                type: types.REQUEST_SIGN_UP
            });
            const res = await axios.post('http://localhost:8081/api/v1/auth/register', {...user}, {withCredentials: true})
            if(!res || !res.success) return dispatch({
                type: types.SIGN_UP_FAILURE,
                payload: {
                    errorMessage: "Server did not respond correctly",
                    resCode: 500
                }
            })
            dispatch({
                type: types.SIGN_UP_SUCCESS,
                payload: res.data.id
            })
        }
        catch(err){
            return dispatch({
                type: types.SIGN_UP_FAILURE,
                payload: {
                    errorMessage: "Error with server",
                    resCode: 500
                }
            })
        }
    },
    login: (dispatch) => async (user) => {
        try{
            dispatch({
                type: types.REQUEST_LOGIN
            });
            const res = await axios.post('http://localhost:8081/api/v1/auth/login', {...user}, {withCredentials: true})
            console.log(res)
            if(!res || !res.data.success) return dispatch({
                type: types.LOGIN_FAILURE,
                payload: {
                    errorMessage: "Server did not respond correctly",
                    resCode: 500
                }
            })
            if(res.data.twoPointAuth == false){
                console.log(res.data.user)
                console.log("tyes", types.LOGIN_NO_PHONE_SUCCESS)
                dispatch({
                    type: types.LOGIN_NO_PHONE_SUCCESS,
                    payload: res.data
                })
            }
            else{
                console.log("TESTTINGNGKDS:FJDSKFJ:DS")
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    payload: res.data
                })
            }
        }
        catch(err){
            return dispatch({
                type: types.LOGIN_FAILURE,
                payload: {
                    errorMessage: err.message,
                    resCode: 500
                }
            })
        }
    },
    logout: (dispatch) => async () => {
        try{
            dispatch({
                type: types.REQUEST_LOGOUT,
            });
            const res = await axios.delete('http://localhost:8081/api/v1/auth/logout', {withCredentials: true})
            
            console.log("RESPONSE on logout", res)
            if(!res || !res.data.success) dispatch({
                    type: types.LOGOUT_FAILURE,
                    payload: {
                        message: "Error logging out on server",
                        resCode: 500
                    }
                })
            else{
                dispatch({
                    type: types.LOGOUT_SUCCESS
                })
            }
        }
        catch(err){
            dispatch({
                type: types.LOGOUT_FAILURE,
                payload: {
                    errorMessage: "Error with server",
                    resCode: 500
                }
            })
            return;
        }
    }
}


export default auth