import { ADD_NEW_QUERY, UPDATE_EXISTING_QUERY, DELETE_EXISTING_QUERY, GET_EXISTING_QUERY, GET_ALL_QUERIES } from './types';

const initialState = {
    loading: false,
    queries: [],
    keyHashAll: false,
    dataHashAll: false,
    queriesHashKeys: { hashType: "none", hashKey: ''}
}

const testReducer = (state=initialState, action) => {
    switch(action.type){
        case REQUEST_EASY_TEST:
            return{
                loading: true,
                errorMessage: '',
                success: true,
                data: [],
                tested: false
            }
        case EASY_TEST_SUCCESS:
            const testData = {...state.data, ...action.payload}
            return{
                loading: false,
                errorMessage: '',
                success: true,
                data: [...testData],
                tested: true
            }
        case EASY_TEST_FAILURE:
            return{
                loading: false,
                errorMessage: 'Test data not found',
                success: false,
                data: [],
                tested: false
            }
        case REQUEST_API_TEST:
            return{
                loading: true,
                errorMessage: '',
                success: true,
                data: [],
                tested: false
            }
        case API_TEST_SUCCESS:
            return{
                loading: false,
                errorMessage: '',
                success: true,
                data: action.payload,
                tested: true
            }
        case API_TEST_FAILURE:
            return{
                loading: false,
                errorMessage: 'Test data not found',
                success: false,
                data: [],
                tested: false
            }
        default:
            return state
    }
}

export default testReducer;