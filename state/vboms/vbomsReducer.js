import { getDomainLocale } from "next/dist/shared/lib/router/router";
import { REQUEST_LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE, REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REQUEST_SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE} from "./auth/types";
import {initialState as orgsReducerState, organizationsReducer} from "./organizations/reducers";
import { initialState as authReducerState, authReducer } from "./auth/reducers";
import { initialState as usersReducerState, usersReducer} from "./users/reducers";
import { initialState as verifyReducerState, verifyReducer} from "./verify/reducers";
import {types as organizationTypes} from "./organizations/types";
import {types as authTypes} from './auth/types';
import {types as usersTypes} from './users/types';
import {types as verifyTypes} from './verify/types';
import setReducers from '../../utils/helpers/setReducers';


const initialState = {
    loading: true,
    data: {},
    errorMessage: '',
    success: true,
    auth: {
        ...authReducerState
    },
    verify: {
        ...verifyReducerState
    },
    users: {
        ...usersReducerState
    },
    orgState: {}
}

const vbomsReducer = (state=initialState, action) => {
    switch(action.type){
        case verifyTypes.REQUEST_VERIFY_EMAIL:
        case verifyTypes.VERIFY_EMAIL_FAILURE:
        case verifyTypes.VERIFY_EMAIL_SUCCESS:
        case verifyTypes.REQUEST_VERIFY_PHONE:
        case verifyTypes.VERIFY_PHONE_FAILURE:
        case verifyTypes.VERIFY_PHONE_SUCCESS:
        case verifyTypes.REQUEST_UPDATE_PHONE:
        case verifyTypes.UPDATE_PHONE_SUCCESS:
        case verifyTypes.UPDATE_PHONE_FAILURE:
        case verifyTypes.REQUEST_UPDATE_EMAIL:
        case verifyTypes.UPDATE_EMAIL_SUCCESS:
        case verifyTypes.UPDATE_EMAIL_FAILURE: {
            const reducers = setReducers(verifyReducerState, verifyReducer, action)
            return {
                ...state,
                verify: {
                    ...reducers
                }
            }
        }
    
        case usersTypes.ADD_USER_FAILURE:
        case usersTypes.ADD_USER_SUCCESS:
        case usersTypes.REQUEST_ADD_USER:
        case usersTypes.GET_USER_FAILURE:
        case usersTypes.GET_USER_SUCCESS:
        case usersTypes.REQUEST_GET_USER:
        case usersTypes.REQUEST_GET_USERS:
        case usersTypes.GET_USERS_SUCCESS:
        case usersTypes.GET_USERS_FAILURE:
        case usersTypes.REQUEST_UPDATE_USER:
        case usersTypes.UPDATE_USER_FAILURE:
        case usersTypes.UPDATE_USER_SUCCESS:
        case usersTypes.REQUEST_DELETE_USER:
        case usersTypes.DELETE_USER_FAILURE:
        case usersTypes.DELETE_USER_SUCCESS: {
            const reducers = setReducers(usersReducerState, usersReducer, action)
            return {
                ...state,
                users: {
                    ...reducers
                }
            }
        }

        
        case organizationTypes.ADD_ORGANIZATION_FAILURE:
        case organizationTypes.ADD_ORGANIZATION_SUCCESS:
        case organizationTypes.REQUEST_ADD_ORGANIZATION:
        case organizationTypes.GET_ORGANIZATIONS_FAILURE:
        case organizationTypes.GET_ORGANIZATIONS_SUCCESS:
        case organizationTypes.REQUEST_GET_ORGANIZATIONS:
        case organizationTypes.REQUEST_GET_ORGANIZATION:
        case organizationTypes.GET_ORGANIZATION_FAILURE:
        case organizationTypes.GET_ORGANIZATION_SUCCESS:
        case organizationTypes.REMOVE_ORGANIZATION_FAILURE:
        case organizationTypes.REMOVE_ORGANIZATION_SUCCESS:
        case organizationTypes.REQUEST_REMOVE_ORGANIZATION:
        case organizationTypes.REQUEST_UPDATE_ORGANIZATION:
        case organizationTypes.UPDATE_ORGANIZATION_FAILURE:
        case organizationTypes.UPDATE_ORGANIZATION_SUCCESS: {
            const reducers = setReducers(orgsReducerState, organizationsReducer, action)
            return {
                ...state,
                orgState: {
                    ...reducers
                }
            }
        }
        case "LOADING_OFF":
            const newState = {...state, loading: false}
            return{
                ...newState
            }
        case authTypes.REQUEST_RESET_PASSWORD:
        case authTypes.RESET_PASSWORD_FAILURE:
        case authTypes.RESET_PASSWORD_SUCCESS:
        case authTypes.REQUEST_TWO_POINT_LOGIN:
        case authTypes.TWO_POINT_LOGIN_FAILURE:
        case authTypes.TWO_POINT_LOGIN_SUCCESS:
        case authTypes.REQUEST_LOGOUT:
        case authTypes.LOGOUT_SUCCESS:
        case authTypes.LOGOUT_FAILURE:
        case authTypes.REQUEST_LOGIN:
        case authTypes.LOGIN_SUCCESS:
        case authTypes.LOGIN_FAILURE:
        case authTypes.REQUEST_SIGN_UP:
        case authTypes.SIGN_UP_SUCCESS:
        case authTypes.SIGN_UP_FAILURE:
        case authTypes.LOGIN_NO_PHONE_SUCCESS:
        case authTypes.REQUEST_CHECK_AUTH:
        case authTypes.CHECK_AUTH_FAILURE:
        case authTypes.CHECK_AUTH_NOT_LOGGED_IN:
        case authTypes.CHECK_AUTH_SUCCESS:
            const reducers = setReducers(authReducerState, authReducer, action)

            return{
                ...state,
                auth: {
                    ...reducers
                }
            }
        default:
            return state
    }
}

export default vbomsReducer;