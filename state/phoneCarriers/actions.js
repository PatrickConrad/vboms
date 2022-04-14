import { types } from './types';
import axios from 'axios';

const phoneCarrierActions = {
    get: (dispatch) => async (carrierId) => {
        try{
            dispatch({
                type: types.REQUEST_GET_PHONE_CARRIER,
            })
            const res = await axios.get(`http://localhost:8081/api/v1/carrier/get/${carrierId}`, { withCredentials: true })
            if(!res) return dispatch({
                type: types.GET_PHONE_CARRIER_FAILURE,
                payload: {
                    isError: true,
                    message: 'Error Getting phone Carrier',
                    code: 500
                }
            })
            console.log("RESPONSE", res)
            dispatch({
                type: types.GET_PHONE_CARRIERS_SUCCESS,
                payload: res
            })
        }
        catch(err){
            dispatch({
                type: types.GET_PHONE_CARRIER_FAILURE,
                payload: {
                    isError: true,
                    message: err.message,
                    code: 500
                }
            })
        }
    },
    getAll: (dispatch) => async () => {
        try{
            dispatch({
                type: types.REQUEST_GET_PHONE_CARRIERS
            })
            const res = await axios.get("http://localhost:8081/api/v1/carrier/all", {withCredentials: true})
            if(!res) return dispatch({
                type: types.GET_PHONE_CARRIERS_FAILURE,
                paylaod: {
                    isError: true,
                    message: "Error getting phone carriers",
                    code: 500
                }
            })
            console.log("RESPONSE", res)
            dispatch({
                type: types.GET_PHONE_CARRIERS_SUCCESS,
                payload: res
            })
        }
        catch(err){
            dispatch({
                type: types.GET_PHONE_CARRIERS_FAILURE,
                payload: {
                    isError: true,
                    message: err.message,
                    code: 500
                }
            })
        }
    },
    add: (dispatch) => async (phoneCarrier) => {
        try{
            dispatch({
                type: types.REQUEST_ADD_PHONE_CARRIER
            })
            
            const res = await axios.post('http://localhost:8081/api/v1/carrier/add', {...phoneCarrier}, {withCredentials: true})
            if(!res) return dispatch({
                type: types.ADD_PHONE_CARRIER_FAILURE,
                payload: {
                    isError: true,
                    message: "Error adding phone",
                    code: 500
                }
            })

            console.log("RESPONSE", res)
            dispatch({
                type: types.ADD_PHONE_CARRIER_SUCCESS,
                payload: res
            })

        }
        catch(err){
            dispatch({
                type: types.ADD_PHONE_CARRIER_FAILURE,
                payload: {
                    isError: true,
                    message: err.message,
                    code: 500
                }
            })
        }
    },
    update: (dispatch) => async (carrier) => {
        try{
            dispatch({
                type: types.REQUEST_UPDATE_PHONE_CARRIER
            });
            const res = await axios.get(`http://localhost:8081/api/v1/carrier/update/${carrier.id}`, {...carrier}, {withCredentials: true});

            if(!res) return dispatch({
                type: types.UPDATE_PHONE_CARRIER_FAILURE,
                payload: {
                    isError: true,
                    message: "Error updating phone carrier",
                    code: 500
                }
            })
            console.log("RESPONSE", res)
            dispatch({
                type: types.UPDATE_PHONE_CARRIER_SUCCESS,
                payload: res
            })
        }
        catch(err){
            dispatch({
                type: types.UPDATE_PHONE_CARRIER_FAILURE,
                payload: {
                    isError: true,
                    message: err.message,
                    code: 500
                }
            })
        }
    },
    delete: (dispatch) => async (carrierId) => {
        try{
            dispatch({
                type: types.REQUEST_REMOVE_PHONE_CARRIER
            });
            const res = await axios.get(`http://localhost:8081/api/v1/carrier/remove/${carrierId}`, {withCredentials: true});
            
            if(!res) return dispatch({
                type: types.REMOVE_PHONE_CARRIER_FAILURE,
                payload: {
                    isError: true,
                    message: "Error removing carrier",
                    code: 500
                }
            })
            console.log("RESPONSE", res)
            dispatch({
                type: types.REMOVE_PHONE_CARRIER_SUCCESS,
                payload: res
            })
        }
        catch(err){
            dispatch({
                type: types.REMOVE_PHONE_CARRIER_FAILURE,
                payload: {
                    isError: true,
                    message: err.message,
                    code: 500
                }
            })
        }
    }
}

export default phoneCarrierActions
