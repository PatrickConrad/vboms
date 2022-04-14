import {types} from './types';

export const initialState = {
    loading: false,
    isAuth: false,
    success: true,
    user: {
        id: '',
        username: {},
        email: '',
        secret: '',
        profile: {}
    },
    error: {
        message: '',
        code: null
    }
}

export const authReducer = (state, action) => {
    switch(action.type){
        case types.SIGN_UP_SUCCESS: {
            const newState = {
                ...state, 
                loading: false,
                isAuth: false,
                success: true,
                user: {
                    id: '',
                    username: {},
                    email: '',
                    secret: '',
                    profile: {}
                },
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState
            }
        }
        case types.SIGN_UP_FAILURE: {
            const newState = {
                ...state, 
                loading: false,
                isAuth: false,
                success: false,
                user: {
                    id: '',
                    username: {},
                    email: '',
                    secret: '',
                    profile: {}
                },
                error: {
                    message: action.payload.errorMessage?? "Error signing up",
                    code: action.payload.resCode?? 500
                }
            }
            return {
                ...newState
            }
        }
        case types.REQUEST_SIGN_UP: {
            const newState = {
                ...state,
                loading: true,
                isAuth: false,
                success: true,
                user: {
                    id: '',
                    username: {},
                    email: '',
                    secret: '',
                    profile: {}
                },
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState
            }
        }
        case types.REQUEST_LOGOUT: {
            const newState = {
                ...state, 
                loading: true,
                isAuth: state.isAuth?? false,
                success: true,
                user: {
                    id: state.user.id ?? "Test",
                    username: state.user.username ?? 'Testing',
                    email: state.user.email ?? 'testing@gmail.com',
                    
                },
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState
            }
        }
        case types.REQUEST_LOGIN: {
            const newState = {
                ...state, 
                loading: false,
                isAuth: false,
                success: true,
                user: {
                    id: '',
                    username: {},
                    email: '',
                    secret: '',
                    profile: {}
                },
                error: {
                    message: '',
                    code: null
                }
            }

            return {
                ...newState,
            }
        }
        case types.LOGOUT_SUCCESS: {
            const newState = {
                ...state, 
                loading: false,
                isAuth: false,
                success: true,
                user: {
                    id: '',
                    username: {},
                    email: '',
                    secret: '',
                    profile: {}
                },
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState
            }
        }
        case types.LOGOUT_FAILURE: {
            const newState = {
                ...state, 
                loading: true,
                isAuth: state.isAuth?? false,
                success: true,
                user: {
                    id: state.user.id ?? "Test",
                    username: state.user.username ?? 'Testing',
                    email: state.user.email ?? 'testing@gmail.com',
                    
                },
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState
            }
        }
        case types.LOGIN_SUCCESS: {
            const id = state.id;
            console.log(`removingID: ${id}`)
            const newState = {
                ...state, 
                loading: false,
                // isAuth: action.payload.user.isAuth != undefined ? action.payload.user.isAuth : false,
                success: true,
                user: {
                    // id: action.payload.user.id != undefined ? action.payload.user.id : "Test",
                    // username: action.payload.user.username  != undefined ? action.payload.user.username : 'Testing',
                    // email: action.payload.user.email != undefined ? action.payload.user.email : 'testing@gmail.com',
                    // secret: action.payload.user.secret != undefined ? action.payload.user.secret : 'adsfagdadfasdf',
                    // profile: action.payload.user.profile != undefined ? action.payload.user.profile : { firstName: "test", lastName: "testing"}
                },
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState,
            }
        }
        case "LOGIN_NO_PHONE_SUCCESS": {
            console.log("USSSSSSSSSSSSER: ", action.payload)
            const newState = {
                ...state, 
                loading: false,
                isAuth: action.payload.user.isAuth != undefined ? action.payload.user.isAuth : true,
                success: true,
                user: {
                    id: u.id != undefined ? u.id : "Test",
                    username: u.username  != undefined ? u.username : 'Testing',
                    email: action.payload.user.email != undefined ? u.email : 'testing@gmail.com',
                    roles: u.roles != undefined ? u.roles : ['user'],
                },
                error: {
                    message: '',
                    code: null
                }
            }
            console.log("HOIIOJSDLF")
            return {
                ...newState,
            }
        }
        case types.LOGIN_FAILURE: {
            const newState = {
                ...state, 
                loading: false,
                isAuth: false,
                success: false,
                user: {
                    id: '',
                    username: {},
                    email: '',
                    secret: '',
                    profile: {}
                },
                error: {
                    message: action.payload.errorMessage?? "Error logging in",
                    code: action.payload.resCode?? 500
                }
            }
            return {
                ...newState
            }
        }
    }
}




