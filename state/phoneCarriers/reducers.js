import { types } from './types';

const initialState = {
    loading: false,
    phoneCarriers: [],
    phoneCarrier: {
        searchTag: '',
        name: '',
        emailAddress: '',
        type: 'sms',
        id: ''
    },
    success: true,
    error: {
        isError: false,
        message: '',
        code: null
    }
}

const phoneCarrierReducer = (state=initialState, action) => {
    switch(action.type){
        case types.REQUEST_GET_PHONE_CARRIERS: {
            return{
                loading: true,
                phoneCarriers: [],
                phoneCarrier: state.phoneCarrier,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.GET_PHONE_CARRIERS_SUCCESS: {
            const allCarriers =  action.payload.data.carriers.map(carrier=>{
                return {
                    searchTag: `${carrier.carrierName} (${carrier.carrierType})`,
                    name: carrier.carrierName,
                    email: carrier.carrierEmail,
                    id: carrier._id,
                    type: carrier.carrierType
                }
            })
            return{
                loading: false,
                phoneCarriers: [...allCarriers],
                phoneCarrier: state.phoneCarrier,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.GET_PHONE_CARRIERS_FAILURE: {
            console.log("PAYLOAD carriers failure", action.payload)
            return{
                loading: false,
                phoneCarriers: [],
                phoneCarrier: state.phoneCarrier,
                success: false,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.REQUEST_GET_PHONE_CARRIER: {
            return{
                loading: true,
                phoneCarriers: [...state.phoneCarriers],
                phoneCarrier: {},
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.GET_PHONE_CARRIER_SUCCESS: {
            console.log("PAYLOAD get carrier success", action.payload)
            return{
                loading: false,
                phoneCarriers: [...state.phoneCarriers],
                phoneCarrier: {},
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.GET_PHONE_CARRIER_FAILURE: {
            console.log("PAYLOAD phone carrier failure", action.payload)
            return{
                loading: false,
                phoneCarriers: [...state.phoneCarriers],
                phoneCarrier: {},
                success: false,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.REQUEST_UPDATE_PHONE_CARRIER: {
            return{
                loading: true,
                phoneCarriers: [...state.phoneCarriers],
                phoneCarrier: state.phoneCarrier,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.UPDATE_PHONE_CARRIER_SUCCESS: {
            console.log("PAYLOAD carriers success", action.payload)
            return{
                loading: false,
                phoneCarriers: [...state.phoneCarriers],
                phoneCarrier: state.phoneCarrier,
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.UPDATE_PHONE_CARRIER_FAILURE: {
            console.log("PAYLOAD carriers failure", action.payload)
            return{
                loading: false,
                phoneCarriers: [...state.phoneCarriers],
                phoneCarrier: state.phoneCarrier,
                success: false,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.REQUEST_REMOVE_PHONE_CARRIER: {
            return{
                loading: true,
                phoneCarriers: [...state.phoneCarriers],
                phoneCarrier: {...state.phoneCarrier},
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.REMOVE_PHONE_CARRIER_SUCCESS: {
            console.log("PAYLOAD get carrier success", action.payload)
            return{
                loading: false,
                phoneCarriers: [...state.phoneCarriers],
                phoneCarrier: {},
                success: true,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        case types.REMOVE_PHONE_CARRIER_FAILURE: {
            console.log("PAYLOAD phone carrier failure", action.payload)
            return{
                loading: false,
                phoneCarriers: [...state.phoneCarriers],
                phoneCarrier: {...state.phoneCarrier},
                success: false,
                error: {
                    isError: false,
                    message: '',
                    code: null
                }
            }
        }
        default:
            return state
    }
}

export default phoneCarrierReducer;