import {types} from './types';

export const initialState = {
    loading: false,
    isAuth: false,
    success: true,
    twoPoint: false,
    twoPointType: '',
    token: '',
    twoPointComplete: false,

    user: {
        id: '',
        username: '',
        email: '',
        secret: '',
        profile: {},
        organizations: []
    },
    loginState: {
        type: 'logging in'
    },
    resetPassword: {
        success: false,
        error: false
    },
    error: {
        message: '',
        code: null
    }
}

export const authReducer = (state, action) => {
    switch(action.type){
        case types.TWO_POINT_LOGIN_SUCCESS: {
            console.log("PAYLOAD SUCCESS:", action.payload)
            const u = action.payload.data.user;
            const newState = {
                ...state, 
                loading: false,
                isAuth: true,
                success: true,
                token: '',
                twoPoint: true,
                twoPointComplete: true,
                user: {
                    id: u.id != undefined ? u.id : "Test",
                    username: u.username  != undefined ? u.username : 'Testing',
                    email: u.email != undefined ? u.email : 'testing@gmail.com',
                    roles: u.roles != undefined ? u.roles : ['user'],
                    organizations: u.organizations != undefined ? u.organizations : []
                },
                loginState: {
                    type: 'login success'
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
        case types.TWO_POINT_LOGIN_FAILURE: {
            const newState = {
                ...state, 
                loading: false,
                isAuth: false,
                success: false,
                twoPoint: false,
                twoPointType: '',
                token: '',
                twoPointComplete: false,
                loginState: {
                    type: 'error'
                },
                user: {
                    id: '',
                    username: {},
                    email: '',
                    secret: '',
                    profile: {},
                    organizations: []
                },
                error: {
                    message: action.payload.errorMessage??"Error signing up",
                    code: action.payload.resCode?? 500
                }
            }
            return {
                ...newState
            }
        }
        case types.REQUEST_TWO_POINT_LOGIN: {
            const newState = {
                ...state,
                loading: true,
                isAuth: false,
                success: true,
                twoPointComplete: false,
                user: {
                    id: '',
                    username: {},
                    email: '',
                    secret: '',
                    profile: {},
                    organizations: []
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
                    profile: {},
                    organizations: []
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
                    profile: {},
                    organizations: []
                },
                error: {
                    message: action.payload.errorMessage??"Error signing up",
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
                    profile: {},
                    organizations: []
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
                loading: true
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
                token: '',
                twoPoint: false,
                twoPointType: '',
                user: {
                    id: '',
                    username: '',
                    email: '',
                    secret: '',
                    profile: {},
                    organizations: []
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
                    username: '',
                    email: '',
                    secret: '',
                    profile: {},
                    organizations: []
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
                ...state
            }
            return {
                ...newState
            }
        }
        case types.LOGIN_NO_PHONE_SUCCESS: {
            console.log("USSSSSSSSSSSSER: ", action.payload)
            const u = action.payload.user
            const newState = {
                ...state, 
                loading: false,
                isAuth: u.isAuth != undefined ? u.isAuth : true,
                success: true,
                user: {
                    id: u.id != undefined ? u.id : "Test",
                    username: u.username  != undefined ? u.username : 'Testing',
                    email: u.email != undefined ? u.email : 'testing@gmail.com',
                    roles: u.roles != undefined ? u.roles : ['user'],
                    organizations: u.organizations != undefined ? u.organizations : []
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
        case types.LOGIN_SUCCESS: {
            console.log("USSSSSSSSSSSSER: ", action.payload)
            const newState = {
                ...state, 
                loading: false,
                isAuth: false,
                success: true,
                token: action.payload.token && action.payload.type === 'phone' ? action.payload.token : '',
                twoPoint: true,
                twoPointType: action.payload.type,
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
                    organizations: []
                },
                error: {
                    message: action.payload.errorMessage?? "Error logging in",
                    // code: action.payload.resCode || 500
                }
            }
            return {
                ...newState
            }
        }
        case types.REQUEST_CHECK_AUTH: {
            const newState = {
                ...state, 
                loading: true,
                isAuth: false,
                success: true,
                user: {
                   organizations: []
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
        case types.CHECK_AUTH_NOT_LOGGED_IN: {
            const newState = {
                ...state, 
                loading: false,
                isAuth: false,
                success: true,
                user: {
                   id: '',
                   username: '',
                   organizations: []
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
        case types.CHECK_AUTH_FAILURE: {
            const newState = {
                ...state, 
                loading: false,
                isAuth: false,
                success: false,
                user: {
                   organizations: []
                },
                error: {
                    message: action.payload.message,
                    code: action.payload.resCode
                }
            }
            return {
                ...newState
            }
        }
        case types.CHECK_AUTH_SUCCESS: {
            const {user} = action.payload
            const newState = {
                ...state, 
                loading: false,
                isAuth: true,
                isAdmin: action.payload.isAdmin,
                user: {
                   id: user.id,
                   firstName: user.firstName,
                   lastName: user.lastName,
                   phoneEmal: user.phoneEmail,
                   phoneNumber: user.phoneNumber,
                   roles: user.roles,
                   username: user.username,
                   organizations: []
                   
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
        case types.REQUEST_RESET_PASWORD: {
            const newState = {
                ...state, 
                resetPassword: {
                    success: false,
                    error: false
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
        case types.RESET_PASSWORD_FAILURE: {
            const newState = {
                ...state, 
                resetPassword: {
                    success: false,
                    error: true
                },
                error: {
                    message: 'Error reseting password',
                    code: 500
                }
            }
            return {
                ...newState
            }
        }
        case types.RESET_PASSWORD_SUCCESS: {
            const newState = {
                ...state, 
                resetPassword: {
                    success: true,
                    error: false
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
        default: {
            console.log("DEFAULTTTTTTT")
            return {...state}
        }
    }
}




