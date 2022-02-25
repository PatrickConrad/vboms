import { getDomainLocale } from "next/dist/shared/lib/router/router";
import { REQUEST_LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE, REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REQUEST_SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE} from "./auth/types";

const initialState = {
    loading: true,
    data: {},
    errorMessage: '',
    success: true,
    auth: {
        isAuth: false,
        user: {
            username: '',
            email: ''
        }
    }
}

const vbomsReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOADING_OFF":
            const newState = {...state, loading: false}
            return{
                ...newState
            }
        case REQUEST_LOGOUT:
            return{
                loading: true,
                errorMessage: '',
                success: true,
                data: {},
                
            }
        case LOGOUT_SUCCESS:
            return{
                loading: true,
                errorMessage: '',
                success: true,
                data: {},
                auth: {
                    isAuth: action.payload,
                    user: {
                        username: 'Patrick',
                        email: 'pat@getDomainLocale.com'
                    }
                }
            }
        case LOGOUT_FAILURE:
            return{
                loading: true,
                errorMessage: 'Error logging out',
                success: false,
                data: {}
            }
            case REQUEST_LOGIN:
                return{
                    loading: true,
                    errorMessage: '',
                    success: true,
                    data: {},
                }
            case LOGIN_SUCCESS:
                return{
                    loading: false,
                    errorMessage: '',
                    success: true,
                    data: {},
                    auth: {
                        isAuth: action.payload,
                        user: {
                            username: 'Patrick',
                            email: 'pat@getDomainLocale.com'
                        }
                    }
                }
            case LOGIN_FAILURE:
                return{
                    loading: true,
                    errorMessage: 'Error Logging In',
                    success: false,
                    data: {},
                }
        default:
            return state
    }
}

export default vbomsReducer;