import {types} from './types';

export const initialState = {
    loading: false,
    success: true,
    error: {
        isError: false,
        message: '',
        code: null
    },
    user: {
        username: '',
        firstName: '',
        lastName: '',
        twoPointAuth: false,
        twoPointMethod: '',
        darkMode: false,
        email: '',
        phoneNumber: '',
        phoneCarrier:'',
        phoneEmail: ''

    },
    users: [],
    
}

export const usersReducer = (state, action) => {
    let currentUser;
    switch(action.type){
        case types.REQUEST_SET_USER: {
            return {
                ...state,
                loading: true,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {
                    username: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    twoPointAuth: false,
                    twoPointMethod: '',
                    darkMode: false,
                    phoneNumber: '',
                    phoneCarrier:'',
                    phoneEmail: ''
                },
            }
        }
        case types.SET_USER_SUCCESS: {
            console.log("USER: ", action.payload)
            return {
                ...state,
                loading: false,
                success: true,
                user: {
                    ...action.payload.user
                }
            }
        }
        case types.SET_USER_FAILURE: {
            console.log("USER FAIL: ", action.payload)
            return {
                ...state,
                loading: false,
                success: false,
                error: {
                    isError: true,
                    message: action.payload.message,
                    code: action.payload.code
                },
                user: {
                    username: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    twoPointAuth: false,
                    twoPointMethod: '',
                    darkMode: false,
                    phoneNumber: '',
                    phoneCarrier:'',
                    phoneEmail: ''
                },
            }
        }
        case types.REQUEST_GET_USER: {
            return {
                ...state,
                loading: true,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {
                    username: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    twoPointAuth: false,
                    twoPointMethod: '',
                    darkMode: false,
                    phoneNumber: '',
                    phoneCarrier:'',
                    phoneEmail: ''
                },
            }
        }
        case types.GET_USER_SUCCESS: {
            console.log("USER: ", action.payload)
            return {
                ...state,
                loading: false,
                success: true,
                user: {
                    ...action.payload.data.user
                }
            }
        }
        case types.GET_USER_FAILURE: {
            console.log("USER FAIL: ", action.payload)
            return {
                ...state,
                loading: false,
                success: false,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {
                    username: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    twoPointAuth: false,
                    twoPointMethod: '',
                    darkMode: false,
                    phoneNumber: '',
                    phoneCarrier:'',
                    phoneEmail: ''
                },
            }
        }
        case types.REQEUST_GET_USERS: {
            return {
                ...state,
                loading: true,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                users: [],
            }
        }
        case types.GET_USERS_SUCCESS: {
            console.log("USERS: ", action.payload)
            return {
                ...state,
                loading: false,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                users: [],
            }
        }
        case types.GET_USERS_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                users: [],
            }
        }
        case types.REQUEST_ADD_USER: {
            return {
                ...state,
                loading: true,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {},
            }
        }
        case types.ADD_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {},
            }
        }
        case types.ADD_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {},
            }
        }
        case types.REQUEST_UPDATE_USER: {
            const currUser = action.paylod;
            console.log("PAYLOAD Request: ", action.payload)
            return {
                ...state,
                loading: true,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {
                    ...action.payload
                },
            }
        }
        case types.UPDATE_USER_SUCCESS: {
            const currUser = action.paylod;
            console.log("PAYLOAD Success: ", action.payload)
            return {
                ...state,
                loading: false,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {
                    ...action.payload.data.user
                }
            }
        }
        case types.UPDATE_USER_FAILURE: {
            const currUser = action.paylod;
            console.log("PAYLOAD Failure: ", action.payload)
            return {
                ...state,
                loading: false,
                success: false,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {
                    username: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    twoPointAuth: false,
                    twoPointMethod: '',
                    darkMode: false,
                    phoneNumber: '',
                    phoneCarrier:'',
                    phoneEmail: ''
                }
            }
        }
        case types.REQUEST_DELETE_USER: {
            return {
                ...state,
                loading: true,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {},
            }
        }
        case types.DELETE_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {},
            }
        }
        case types.DELETE_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
                error: {
                    isError: false,
                    message: '',
                    code: null
                },
                user: {},
            }
        }
        default: return state;
    }
}

