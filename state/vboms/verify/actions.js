import {types} from './types'
import axios from 'axios';

const verify = {
    updatePhone: (dispatch)=> async (phoneInfo) =>{
        try{
            dispatch({
                type: types.REQUEST_UPDATE_PHONE,
            })
            const res = await axios.put('http://localhost:8081/api/v1/secondary-auth/request-phone-update', {phoneInfo}, {withCredentials: true});
            if(!res) return dispatch({
                type: types.UPDATE_PHONE_FAILURE,
                payload: {
                    error: {
                        message: "Error getting response from server",
                        code: 500
                    }
                }
            })
            console.log("RESPONSE: ", res);
            dispatch({
                type: types.UPDATE_PHONE_SUCCESS,
                payload: {
                    res: res
                }
            })
        }
        catch(err){
            dispatch({
                type: types.UPDATE_PHONE_FAILURE,
                payload: {
                    message: err.message,
                    code: 500
                }
            })
        }
    },
    verifyPhone: (dispatch)=> async ({pin, token})=>{
        try{
            dispatch({
                type: types.REQUEST_VERIFY_PHONE
            })
            const res = await axios.put(`http://localhost:8081/api/v1/secondary-auth/verify-phone/${token}`, {pin}, {withCredentials: true});
            if(!res) return dispatch({
                type: types.VERIFY_PHONE_FAILURE,
                payload: {
                    message: "Error getting response from server",
                    code: 500
                }
            })
            console.log("RESPONSE: ", res);
            dispatch({
                type: types.VERIFY_PHONE_SUCCESS,
                payload: res
            })
        }
        catch(err){
            dispatch({
                type: types.VERIFY_PHONE_FAILURE,
                payload: {
                    message: err.message,
                    code: 500
                }
            })
        }
    },
    updateEmail: (dispatch)=> async (email)=>{
        try{
            dispatch({
                type: types.REQUEST_UPDATE_EMAIL
            })
            const info = {email}
            const res = await axios.put('http://localhost:8081/api/v1/secondary-auth/request-email-update', {...info}, {withCredentials: true});
            if(!res) return dispatch({
                type: types.UPDATE_EMAIL_FAILURE,
                payload: {
                    message: "Error getting response from server",
                    code: 500
                }
            })
            console.log("RESPONSE: ", res);
            dispatch({
                type: types.UPDATE_EMAIL_SUCCESS,
                payload: res
            })
        }
        catch(err){
            dispatch({
                type: types.UPDATE_EMAIL_FAILURE,
                payload: {
                    message: err.message,
                    code: 500
                }
            })
        }
    },
    verifyEmail: (dispatch)=> async (token, hasAuth)=>{
        try{
            dispatch({
                type: types.REQUEST_VERIFY_EMAIL
            })

            let res;
            if(!hasAuth){
                res = await axios.put(`http://localhost:8081/api/v1/secondary-auth/verify-email/${token}`)
            }
            else{
                res = await axios.put(`http://localhost:8081/api/v1/secondary-auth/request-email-update/${token}`, {}, {withCredentials: true});
            }
            if(!res) return dispatch({
                type: types.VERIFY_EMAIL_FAILURE,
                payload: {
                    message: "Error getting response from server",
                    code: 500
                }
            })
            console.log("RESPONSE: ", res);
            dispatch({
                type: types.VERIFY_EMAIL_SUCCESS,
                payload: res
            })
        }
        catch(err){
            dispatch({
                type: types.VERIFY_EMAIL_FAILURE,
                payload: {
                    message: err.message,
                    code: 500
                }
            })
        }
    }
}


export default verify