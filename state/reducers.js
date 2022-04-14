import testReducer from "./test/testReducer";
import testReducer2 from "./test2/testReducer";
import vbomsReducer from "./vboms/vbomsReducer";
import storeReducer from "./store/storeReducer";
import phoneCarrierReducer from "./phoneCarriers/reducers";


export const allReducers = {
    test: testReducer,
    test2: testReducer2,
    vboms: vbomsReducer,
    store: storeReducer,
    phoneCarriers: phoneCarrierReducer
}

export const combineReducer = (reducers) => {
    const initialState = {};
    for(const [key, value] of Object.entries(reducers)){
        if(typeof value === 'function'){
            initialState[key] = value(undefined, {type: 'PLACEHOLDER_ACTION'});
        }
        else{
            console.log("Is not a function")
        }
    }
    const mainReducer = (state, action) => {
        let hasStateChanged = false;
        const updatedStateByReducers = {};
        for(const reducer in reducers){
            if(reducers.hasOwnProperty(reducer)){
                const currentStateByKey = state[reducer];
                const currentReducer = reducers[reducer];
                const returnedStateByReducer = currentReducer(currentStateByKey, action);
                const areStateByKeyEqual = returnedStateByReducer !== currentStateByKey;
                hasStateChanged = areStateByKeyEqual ? areStateByKeyEqual : hasStateChanged;
                hasStateChanged = hasStateChanged || areStateByKeyEqual;
                updatedStateByReducers[reducer] = returnedStateByReducer;
            }
        }
        const change = hasStateChanged ? updatedStateByReducers : state;
        return change;
    }

    return [mainReducer, initialState]
}

