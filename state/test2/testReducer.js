import { REQUEST_API_TEST2, API_TEST_FAILURE2, API_TEST_SUCCESS2 } from "./testTypes";

const initialState = {
    loading: false,
    data: {},
    tested: true,
    errorMessage: '',
    success: true
}

const testReducer2 = (state=initialState, action) => {
    switch(action.type){
        case REQUEST_API_TEST2:
            return{
                loading: true,
                errorMessage: '',
                success: true,
                data: {},
                tested: false
            }
        case API_TEST_SUCCESS2:
            return{
                loading: false,
                errorMessage: '',
                success: true,
                data: action.payload,
                tested: true
            }
        case API_TEST_FAILURE2:
            return{
                loading: false,
                errorMessage: 'Test data not found',
                success: false,
                data: {},
                tested: false
            }
        default:
            return state
    }
}

export default testReducer2;