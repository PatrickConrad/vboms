import {types} from "./types";
import axios from 'axios';

const organizations = {
    getOrganization: (dispatch) => {
        return async (orgId) => {
            try{
                dispatch({
                    type: types.REQUEST_GET_ORGANIZATION
                });
                console.log("get org check")

                // const res = await axios.get(`http://localhost:8081/api/v1/organizations/${orgId}`, {withCredentials: true});
                // if(!res){
                //     console.log("Server Error: No response")
                //     const errorMessage = "Server Error: No response"
                //     const resCode = '500'
                //     return dispatch({
                //         type: organizationTypes.GET_ORGANIZATION_FAILURE,
                //         payload: {errorMessage, resCode}
                //     })
                // }
                // if(!res.data.success){
                //     console.log(`Server Error: ${res.data.message ? res.data.message : "Request was unseccessful"}`)
                //     return dispatch({
                //         type: organizationTypes.GET_ORGANIZATION_FAILURE,
                //         payload: res
                //     })
                // }
                // dispatch({
                //     type: organizationTypes.GET_ORGANIZATION_SUCCESS,
                //     payload: res
                // })
            }
            catch(err){
                dispatch({
                    type: types.GET_ORGANIZATION_FAILURE,
                    payload: err
                })
            }
        }
    },
    getOrganizations: (dispatch) => {
        return async () => {
            try{
                dispatch({
                    type: types.REQUEST_GET_ORGANIZATIONS
                });
                console.log("get orgs check")

                // const res = await axios.get(`http://localhost:8081/api/v1/organizations`, {withCredentials: true});
                // if(!res){
                //     console.log("Server Error: No response")
                //     const errorMessage = "Server Error: No response"
                //     const resCode = '500'
                //     return dispatch({
                //         type: organizationTypes.GET_ORGANIZATIONS_FAILURE,
                //         payload: {errorMessage, resCode}
                //     })
                // }
                // if(!res.data.success){
                //     console.log(`Server Error: ${res.data.message ? res.data.message : "Request was unseccessful"}`)
                //     return dispatch({
                //         type: organizationTypes.GET_ORGANIZATIONS_FAILURE,
                //         payload: res
                //     })
                // }
                // dispatch({
                //     type: organizationTypes.GET_ORGANIZATIONS_SUCCESS,
                //     payload: res
                // })
            }
            catch(err){
                dispatch({
                    type: types.GET_ORGANIZATIONS_FAILURE,
                    payload: err
                })
            }
        }
    },
    updateOrganization: (dispatch) => {
        return async (info) => {
            try{
                dispatch({
                    type: types.REQUEST_UPDATE_ORGANIZATION,
                    payload: info
                });
                console.log("update org check")

                // const {orgId} = info;
                // const res = await axios.put(`http://localhost:8081/api/v1/organizations/${orgId}`, {...info}, {withCredentials: true});
                // if(!res){
                //     console.log("Server Error: No response")
                //     const errorMessage = "Server Error: No response"
                //     const resCode = '500'
                //     return dispatch({
                //         type: organizationTypes.UPDATE_ORGANIZATION_FAILURE,
                //         payload: {errorMessage, resCode}
                //     })
                // }
                // if(!res.data.success){
                //     console.log(`Server Error: ${res.data.message ? res.data.message : "Request was unseccessful"}`)
                //     return dispatch({
                //         type: organizationTypes.UPDATE_ORGANIZATION_FAILURE,
                //         payload: res
                //     })
                // }
                // dispatch({
                //     type: organizationTypes.UPDATE_ORGANIZATION_SUCCESS,
                //     payload: res
                // })
            }
            catch(err){
                dispatch({
                    type: types.GET_ORGANIZATION_FAILURE,
                    payload: err
                })
            }
        }
    },
    addOrganization: (dispatch) => {
        return async (info) => {
            try{
                dispatch({
                    type: types.REQUEST_ADD_ORGANIZATION
                });
                console.log("add org check")
                // const {orgId} = info;
                // const res = await axios.post(`http://localhost:8081/api/v1/organizations/${orgId}`, {...info}, {withCredentials: true});
                // if(!res){
                //     console.log("Server Error: No response")
                //     const errorMessage = "Server Error: No response"
                //     const resCode = '500'
                //     return dispatch({
                //         type: organizationTypes.ADD_ORGANIZATION_FAILURE,
                //         payload: {errorMessage, resCode}
                //     })
                // }
                // if(!res.data.success){
                //     console.log(`Server Error: ${res.data.message ? res.data.message : "Request was unseccessful"}`)
                //     return dispatch({
                //         type: organizationTypes.ADD_ORGANIZATION_FAILURE,
                //         payload: res
                //     })
                // }
                // dispatch({
                //     type: organizationTypes.ADD_ORGANIZATION_SUCCESS,
                //     payload: res
                // })
            }
            catch(err){
                dispatch({
                    type: types.ADD_ORGANIZATION_FAILURE,
                    payload: err
                })
            }
        }
    },
    removeOrganization: (dispatch) => {
        return async (info) => {
            try{
                dispatch({
                    type: types.REQUEST_REMOVE_ORGANIZATION,
                    payload: info
                });
                console.log("remove org check")

                // const {orgId} = info;
                // const res = await axios.delete(`http://localhost:8081/api/v1/organizations/${orgId}`, {withCredentials: true});
                
                // if(!res){
                //     console.log("Server Error: No response")
                //     const errorMessage = "Server Error: No response"
                //     const resCode = '500'
                //     return dispatch({
                //         type: organizationTypes.REMOVE_ORGANIZATION_FAILURE,
                //         payload: {errorMessage, resCode}
                //     })
                // }
                // if(!res.data.success){
                //     console.log(`Server Error: ${res.data.message ? res.data.message : "Request was unseccessful"}`)
                //     return dispatch({
                //         type: organizationTypes.REMOVE_ORGANIZATION_FAILURE,
                //         payload: res
                //     })
                // }
                // dispatch({
                //     type: organizationTypes.REMOVE_ORGANIZATION_SUCCESS,
                //     payload: res
                // })
            }
            catch(err){
                dispatch({
                    type: types.REMOVE_ORGANIZATION_FAILURE,
                    payload: {err, errorMessage: err.message, resCode: 500}
                })
            }
        }
    }
}


export default organizations