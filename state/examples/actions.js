import { ADD_NEW_QUERY, UPDATE_EXISTING_QUERY, DELETE_EXISTING_QUERY } from './types';
import axios from 'axios';

const actions = {
    add: (dispatch) => async () => {
        try{
            dispatch({
                type: ADD_NEW_QUERY
            });
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

            if(!res){
                return dispatch({
                    type: ADD_NEW_QUERY,
                    payload: "Error getting data"
                })
            }
            dispatch({
                type: ADD_NEW_QUERY,
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
                type: DELETE_EXISTING_QUERY
            });
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

            if(!res){
                return dispatch({
                    type: DELETE_EXISTING_QUERY,
                    payload: "Error getting data"
                })
            }
            dispatch({
                type: DELETE_EXISTING_QUERY,
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
