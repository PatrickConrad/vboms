import {types} from './types'
import axios from 'axios';

const users = {
    set: (dispatch) => async () => {
        try{
            dispatch({
                type: types.REQUEST_SET_USER
            })
            const res = await axiospost('http:/localhost:8081/api/v1/user/', {...u}, {withCredentials: true})
            if(!res){
                return dispatch({
                    type: types.SET_USER_FAILURE,
                    payload: {
                        message: "Server Err",
                        code: 500
                    }
                })
            }
        if(!res.data.success){
            return dispatch({
                type: types.SET_USER_FAILURE,
                payload: {
                    message:res.data.message,
                    code: 500
                }
            })
        }
        dispatch({
            type: types.SET_USER_SUCCESS,
            payload: res.data
        })
        }
        catch(err){
            dispatch({
                type: types.SET_USER_FAILURE,
                payload: {
                    message: "Error setting User",
                    code: 500
                }
            })
        }
    },
    get: (dispatch) => {
        return async () => {
            try{
                dispatch({
                    type: types.REQUEST_GET_USER
                });
                console.log("get org check")

                const res = await axios.get(`http://localhost:8081/api/v1/user/`, {withCredentials: true});
                if(!res){
                    console.log("Server Error: No response")
                    const message = "Server Error: No response"
                    const code = '500'
                    return dispatch({
                        type: types.GET_USER_FAILURE,
                        payload: {isError: true, message, code}
                    })
                }
                if(!res.data.success){
                    console.log(`Server Error: ${res.data.message ? res.data.message : "Request was unseccessful"}`)
                    return dispatch({
                        type: types.GET_USER_FAILURE,
                        payload: res
                    })
                }
                console.log("RESPONSE", res)
                dispatch({
                    type: types.GET_USER_SUCCESS,
                    payload: res
                })
            }
            catch(err){
                dispatch({
                    type: types.GET_USER_FAILURE,
                    payload: {
                        message: err.message,
                        code: 500                        
                    }
                })
            }
        }
    },
    // getAll: (dispatch) => {
    //     return async () => {
    //         try{
    //             dispatch({
    //                 type: types.REQUEST_GET_ORGANIZATIONS
    //             });
    //             console.log("get orgs check")

    //             // const res = await axios.get(`http://localhost:8081/api/v1/organizations`, {withCredentials: true});
    //             // if(!res){
    //             //     console.log("Server Error: No response")
    //             //     const errorMessage = "Server Error: No response"
    //             //     const resCode = '500'
    //             //     return dispatch({
    //             //         type: organizationTypes.GET_ORGANIZATIONS_FAILURE,
    //             //         payload: {errorMessage, resCode}
    //             //     })
    //             // }
    //             // if(!res.data.success){
    //             //     console.log(`Server Error: ${res.data.message ? res.data.message : "Request was unseccessful"}`)
    //             //     return dispatch({
    //             //         type: organizationTypes.GET_ORGANIZATIONS_FAILURE,
    //             //         payload: res
    //             //     })
    //             // }
    //             // dispatch({
    //             //     type: organizationTypes.GET_ORGANIZATIONS_SUCCESS,
    //             //     payload: res
    //             // })
    //         }
    //         catch(err){
    //             dispatch({
    //                 type: types.GET_ORGANIZATIONS_FAILURE,
    //                 payload: err
    //             })
    //         }
    //     }
    // },
    update: (dispatch) => {
        return async (user) => {
            console.log("USER: ", user)
            try{
                dispatch({
                    type: types.REQUEST_UPDATE_USER,
                    payload: user
                });
                console.log("update org check")

                const res = await axios.put(`http://localhost:8081/api/v1/user/${user.id}`, {...user}, {withCredentials: true});
                if(!res){
                    return dispatch({
                        type: types.UPDATE_USER_FAILURE,
                        payload: {
                            message: "Error Updating user", 
                            code: 500}
                    })
                }
                if(!res.data.success){
                    console.log(`Server Error: ${res.data.message ? res.data.message : "Request was unseccessful"}`)
                    return dispatch({
                        type: types.UPDATE_USER_FAILURE,
                        payload: {
                            response: res,
                            error: {
                                message: "Error updating user",
                                code: 500
                            }
                        }
                    })
                }
                dispatch({
                    type: types.UPDATE_USER_SUCCESS,
                    payload: res
                })
            }
            catch(err){
                dispatch({
                    type: types.UPDATE_USER_FAILURE,
                    payload: {
                        message: err.message,
                        code: 500
                    }
                })
            }
        }
    },
    // add: (dispatch) => {
    //     return async (info) => {
    //         try{
    //             dispatch({
    //                 type: types.REQUEST_ADD_ORGANIZATION
    //             });
    //             console.log("add org check")
    //             // const {orgId} = info;
    //             // const res = await axios.post(`http://localhost:8081/api/v1/organizations/${orgId}`, {...info}, {withCredentials: true});
    //             // if(!res){
    //             //     console.log("Server Error: No response")
    //             //     const errorMessage = "Server Error: No response"
    //             //     const resCode = '500'
    //             //     return dispatch({
    //             //         type: organizationTypes.ADD_ORGANIZATION_FAILURE,
    //             //         payload: {errorMessage, resCode}
    //             //     })
    //             // }
    //             // if(!res.data.success){
    //             //     console.log(`Server Error: ${res.data.message ? res.data.message : "Request was unseccessful"}`)
    //             //     return dispatch({
    //             //         type: organizationTypes.ADD_ORGANIZATION_FAILURE,
    //             //         payload: res
    //             //     })
    //             // }
    //             // dispatch({
    //             //     type: organizationTypes.ADD_ORGANIZATION_SUCCESS,
    //             //     payload: res
    //             // })
    //         }
    //         catch(err){
    //             dispatch({
    //                 type: types.ADD_ORGANIZATION_FAILURE,
    //                 payload: err
    //             })
    //         }
    //     }
    // },
    // remove: (dispatch) => {
    //     return async (info) => {
    //         try{
    //             dispatch({
    //                 type: types.REQUEST_REMOVE_ORGANIZATION,
    //                 payload: info
    //             });
    //             console.log("remove org check")

    //             // const {orgId} = info;
    //             // const res = await axios.delete(`http://localhost:8081/api/v1/organizations/${orgId}`, {withCredentials: true});
                
    //             // if(!res){
    //             //     console.log("Server Error: No response")
    //             //     const errorMessage = "Server Error: No response"
    //             //     const resCode = '500'
    //             //     return dispatch({
    //             //         type: organizationTypes.REMOVE_ORGANIZATION_FAILURE,
    //             //         payload: {errorMessage, resCode}
    //             //     })
    //             // }
    //             // if(!res.data.success){
    //             //     console.log(`Server Error: ${res.data.message ? res.data.message : "Request was unseccessful"}`)
    //             //     return dispatch({
    //             //         type: organizationTypes.REMOVE_ORGANIZATION_FAILURE,
    //             //         payload: res
    //             //     })
    //             // }
    //             // dispatch({
    //             //     type: organizationTypes.REMOVE_ORGANIZATION_SUCCESS,
    //             //     payload: res
    //             // })
    //         }
    //         catch(err){
    //             dispatch({
    //                 type: types.REMOVE_ORGANIZATION_FAILURE,
    //                 payload: {err, errorMessage: err.message, resCode: 500}
    //             })
    //         }
    //     }
    // }
}


export default users