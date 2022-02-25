import { ADD_NEW_QUERY, UPDATE_EXISTING_QUERY, DELETE_EXISTING_QUERY, GET_EXISTING_QUERY, GET_ALL_QUERIES } from './types';
import axios from 'axios';

const actions = {
    get: (dispatch) => async (query) => {
        try{
            dispatch({
                type: GET_EXISTING_QUERY,
                payload: query
            })
        }
        catch(err){
            dispatch({
                type: GET_EXISTING_QUERY,
                payload: err.message
            })
        }
    },
    getAll: (dispatch) => async (query) => {
        try{
            dispatch({
                type: GET_ALL_QUERIES,
                payload: query
            })
        }
        catch(err){
            dispatch({
                type: GET_ALL_QUERIES,
                payload: err.message
            })
        }
    },
    add: (dispatch) => async (query) => {
        try{
            dispatch({
                type: ADD_NEW_QUERY,
                payload: query
            })
        }
        catch(err){
            dispatch({
                type: API_TEST_FAILURE,
                payload: err.message
            })
        }
    },
    update: (dispatch) => async () => {
        try{
            dispatch({
                type: REQUEST_API_TEST
            });
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

            if(!res){
                return dispatch({
                    type: UPDATE_EXISTING_QUERY,
                    payload: "Error getting data"
                })
            }
            dispatch({
                type: UPDATE_EXISTING_QUERY,
                payload: res.data
            })
        }
        catch(err){
            dispatch({
                type: API_TEST_FAILURE,
                payload: err.message
            })
        }
    },
    delete: (dispatch) => async () => {
        try{
            dispatch({
                type: REQUEST_API_TEST
            });
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

            if(!res){
                return dispatch({
                    type: DELETE_EXISTING_QUERY,
                    payload: "Error getting data"
                })
            }
            dispatch({
                type: UPDATE_EXISTING_QUERY,
                payload: res.data
            })
        }
        catch(err){
            dispatch({
                type: API_TEST_FAILURE,
                payload: err.message
            })
        }
    }
}

export default actions
