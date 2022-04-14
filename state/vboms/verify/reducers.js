import {types} from './types';

export const initialState = {
    loading: false,
    success: true,
    error: {
        isError: false,
        message: '',
        code: null
    },
    phoneState: {
        loading: false,
        token: '',
        type: 'set'
    },
    emailState: {
        loading: false,
        type: 'set'
    }
}

export const verifyReducer = (state, action) => {
    switch(action.type){
        case types.REQUEST_UPDATE_EMAIL: {
            return {
                ...state,
                loading: true,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                emailState: {
                    loading: true,
                    type: 'loading'
                }
            }
        }
        case types.UPDATE_EMAIL_SUCCESS: {
            console.log("PAYLOAD: ", action.payload)
            return {
                ...state,
                loading: false,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                emailState: {
                    loading: false,
                    type: 'awaitingVerification'
                }
            }
        }
        case types.UPDATE_EMAIL_FAILURE: {
            console.log("ERROR PAYLOAD: ", action.payload)
            return {
                ...state,
                loading: false,
                success: false,
                error: {
                    isError: true,
                    message: '',
                    code: null
                },
                emailState: {
                    loading: false,
                    type: 'error'
                }
            }
        }
        case types.REQUEST_UPDATE_PHONE: {
            return {
                ...state,
                loading: true,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                phoneState: {
                    loading: true,
                    token: '',
                    type: 'loading'
                }
            }
        }
        case types.UPDATE_PHONE_SUCCESS: {
            console.log("PAYLOAD: ", action.payload)
            return {
                ...state,
                loading: false,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                phoneState: {
                    loading: false,
                    token: action.payload.res.data.token,
                    type: 'awaitingPin'
                }
            }
        }
        case types.UPDATE_PHONE_FAILURE: {
            console.log("phone failure: ", action.payload)
            return {
                ...state,
                loading: false,
                success: false,
                error: {
                    isError: true,
                    message: '',
                    code: null
                },
                phoneState: {
                    type: "error",
                    loading: false,
                    token: ''
                }
            }
        }
        default: return state;
    }
}

