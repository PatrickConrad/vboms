import {types} from './types';

const checkItemAndReplace = (array, item) => {
    if(array.length<1){
        return array.push(item)
    }
    const index = array.findIndex((o)=>{
        o.id === item.id
    })

    if(index === -1){
        return array.push(item);
    }
    else{
       return array[index] = item
    }
}

const checkItemAndRemove = (array, itemId) => {
    const index = array.findIndex((o)=>{
        o.id === itemId
    })

    if(index === -1){
        return;
    }
    else{
       return array.filter((i)=>{
           return array[i] === index
       })
    }
}

export const initialState = {
    loading: false,
    oganization: {
        id: '',
        data: {},
        callbackUri: '',
        secret: ''
    },
    organizations: [],
    error: {
        message: '',
        code: null
    }
}

export const organizationsReducer = (state, action) => {
    switch(action.type){
        case types.REQUEST_GET_ORGANIZATION: {
            const newState = {
                ...state, 
                loading: true,
                organization: {
                    id: '',
                    data: {},
                    callbackUri: '',
                    secret: ''
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
        case types.GET_ORGANIZATION_SUCCESS: {
            const newState = {
                ...state,
                loading: false,
                organization: {
                    id: action.payload.data._id,
                    data: action.payload.data.info,
                    callbackUri: action.payload.data.callbackUri,
                    secret: action.payload.data.secret
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
        case types.GET_ORGANIZATION_FAILURE: {
            const newState = {
                ...state,
                loading: false,
                organization: {
                    id: '',
                    data: {},
                    callbackUri: '',
                    secret: ''
                },
                error: {
                    message: res.data.errorMessage || "Error getting organization",
                    code: res.data.resCode || 500
                }
            }
            return {
                ...newState
            }
        }
        case types.REQUEST_GET_ORGANIZATIONS: {
            const newState = {
                ...state, 
                loading: true,
                organizations: [],
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState
            }
        }
        case types.GET_ORGANIZATIONS_SUCCESS: {
            const newState = {
                ...state, 
                loading: false,
                organizations: [action.payload.data.organizations],
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState
            }
        }
        case types.GET_ORGANIZATIONS_FAILURE: {
            const newState = {
                ...state, 
                loading: false,
                organizations: [],
                error: {
                    message: res.data.errorMessage || "Error getting organizations",
                    code: res.data.resCode || 500
                }
            }
            return {
                ...newState
            }
        }
        case types.REQUEST_ADD_ORGANIZATION: {
            const newState = {
                ...state, 
                loading: true,
                organization: {
                    id: '',
                    data: {},
                    callbackUri: '',
                    secret: ''
                },
                organizations: [...state.organizations],
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState
            }
        }
        case types.ADD_ORGANIZATION_SUCCESS: {
            const newState = {
                ...state, 
                loading: false,
                organization: {
                    id: action.payload.organization.id,
                    data: {organizationName: action.payload.organization.name},
                    callbackUri: action.payload.organization.callbackUri,
                    secret: action.payload.organization.secret
                },
                organizations: [...state.organizations],
                error: {
                    message: '',
                    code: null
                }
            }
            newState.organizations.push(newState.organization)
            return {
                ...newState
            }
        }
        case types.ADD_ORGANIZATION_FAILURE: {
            const newState = {
                ...state,
                loading: false,
                organization: {
                    id: '',
                    data: {},
                    callbackUri: '',
                    secret: ''
                },
                organizations: [...state.organizations],
                error: {
                    message: res.data.errorMessage || "Error adding organization",
                    code: res.data.resCode || 500
                }
            }
            return {
                ...newState
            }
        }
        case types.REQUEST_UPDATE_ORGANIZATION: {
            const {id, data, callbackUri, secret} = action.payload.organization;
            const newState = {
                ...state, 
                loading: true,
                organization: {
                    id: id,
                    data: data,
                    callbackUri: callbackUri,
                    secret: secret
                },
                organizations: [...state.organizations],
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState
            }
        }
        case types.UPDATE_ORGANIZATION_SUCCESS: {
            const {id, data, callbackUri, secret} = action.payload.organization;
            const newState = {
                ...state, 
                loading: false,
                organization: {
                    id: id || state.organization.id,
                    data: data || state.organization.data ,
                    callbackUri: callbackUri || state.organization.callbackUri,
                    secret: secret || state.organization.secret
                },
                organizations: [...state.organizations],
                error: {
                    message: '',
                    code: null
                }
            }

            const newOrgs = checkItemAndReplace(newState.organizations, newState.organization)
            return {
                ...newState,
                organizations: newOrgs
            }
        }
        case types.UPDATE_ORGANIZATION_FAILURE: {
            const newState = {
                ...state, 
                loading: false,
                organization: {
                    id: state.id,
                    data: state.data ,
                    callbackUri: state.callbackUri,
                    secret: state.secret
                },
                organizations: [...state.organizations],
                error: {
                    message: res.data.errorMessage || "Error getting organizations",
                    code: res.data.resCode || 500
                }
            }
            return {
                ...newState
            }
        }
        case types.REQUEST_REMOVE_ORGANIZATION: {
            const {id, data, callbackUri, secret} = action.payload.organization;
            const newState = {
                ...state, 
                loading: true,
                organization: {
                    id: id,
                    data: data ,
                    callbackUri: callbackUri,
                    secret: secret
                },
                organizations: [...state.organizations],
                error: {
                    message: '',
                    code: null
                }
            }
            return {
                ...newState
            }
        }
        case types.REMOVE_ORGANIZATION_SUCCESS: {
            const id = state.id;
            console.log(`removingID: ${id}`)
            const newState = {
                ...state, 
                loading: false,
                organization: {
                    id: '',
                    data: {},
                    callbackUri: '',
                    secret: ''
                },
                organizations: [...state.organizations],
                error: {
                    message: '',
                    code: null
                }
            }
            const newOrgs = checkItemAndRemove(newState.organizations, id)
            return {
                ...newState,
                organizations: newOrgs
            }
        }
        case types.REMOVE_ORGANIZATION_FAILURE: {
            const newState = {
                ...state, 
                loading: false,
                organization: {
                    id: state.id,
                    data: state.data ,
                    callbackUri: state.callbackUri,
                    secret: state.secret
                },
                organizations: [...state.organizations],
                error: {
                    message: res.payload.errorMessage || "Error removing organizations",
                    code: res.payload.resCode || 500
                }
            }
            return {
                ...newState
            }
        }
    }
}




