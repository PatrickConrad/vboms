import { getDomainLocale } from "next/dist/shared/lib/router/router";
import setReducers from "utils/helpers/setReducers";
import { authReducer, initialState as authReducerState } from "./auth/reducers";
import {types as authTypes} from "./auth/types";

const initialState = {
    loading: true,
    data: {},
    errorMessage: '',
    success: true,
    auth: {},
    subHeader: true
}

const storeReducer = (state=initialState, action) => {
    switch(action.type){
        case authTypes.REQUEST_LOGOUT:
        case authTypes.LOGOUT_SUCCESS:
        case authTypes.LOGOUT_FAILURE:
        case authTypes.REQUEST_LOGIN:
        case authTypes.LOGIN_SUCCESS:
        case authTypes.LOGIN_FAILURE:
        case authTypes.REQUEST_SIGN_UP:
        case authTypes.SIGN_UP_SUCCESS:
        case authTypes.SIGN_UP_FAILURE: {
            const reducers = setReducers(authReducerState, authReducer, action)
            return {
                ...state,
                auth: {
                    ...reducers
                }
            }
        }
        default:
            return state
    }
}

export default storeReducer;