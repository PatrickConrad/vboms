import { REQUEST_API_TEST2, API_TEST_SUCCESS2, API_TEST_FAILURE2} from "./testTypes";
import axios from 'axios';

const testActions2 = {
    getApiData: (dispatch) => async (postId) => {
        try{
            dispatch({
                type: REQUEST_API_TEST2
            });
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

            if(!res){
                return dispatch({
                    type: API_TEST_FAILURE2,
                    payload: "Error getting data"
                })
            }
            dispatch({
                type: API_TEST_SUCCESS2,
                payload: res.data
            })
        }
        catch(err){
            dispatch({
                type: API_TEST_FAILURE2,
                payload: err.message
            })
        }
    },
    getApiData2: (dispatch) => async (postId) => {
        try{
            dispatch({
                type: REQUEST_API_TEST2
            });
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

            if(!res){
                return dispatch({
                    type: API_TEST_FAILURE2,
                    payload: "Error getting data"
                })
            }
            dispatch({
                type: API_TEST_SUCCESS2,
                payload: res.data
            })
        }
        catch(err){
            dispatch({
                type: API_TEST_FAILURE2,
                payload: err.message
            })
        }
    }
}


export default testActions2