import { REQUEST_API_TEST, REQUEST_EASY_TEST, API_TEST_SUCCESS, EASY_TEST_SUCCESS, API_TEST_FAILURE, EASY_TEST_FAILURE } from "./testTypes";
import axios from 'axios';

const testActions = {
    getApiData: (dispatch) => async () => {
        try{
            dispatch({
                type: REQUEST_API_TEST
            });
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

            if(!res){
                return dispatch({
                    type: API_TEST_FAILURE,
                    payload: "Error getting data"
                })
            }
            dispatch({
                type: API_TEST_SUCCESS,
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
    getApiData2: (dispatch) => async () => {
        try{
            dispatch({
                type: REQUEST_API_TEST
            });
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

            if(!res){
                return dispatch({
                    type: API_TEST_FAILURE,
                    payload: "Error getting data"
                })
            }
            dispatch({
                type: API_TEST_SUCCESS,
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


export default testActions
