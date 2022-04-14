import test from "./test/testActions";
import test2 from "./test2/testActions";
import phoneCarrierActions from "./phoneCarriers/actions";
import {vboms} from "./vboms";
import {store} from "./store";

export const actionTypes = {
    test,
    test2,
    vboms,
    store,
    phoneCarrierActions
}

const callAction = (dispatch, allActions) => {
    const types = {};
    for(let type in allActions){
        const actions = {};
        Object.entries(allActions[type]).map(([prop, val]) => {
            if(typeof val !== 'function') { 
                actions[prop] = val;
                for(let a in allActions[type]){
                    const apps = {};
                    Object.entries(allActions[type][a]).map(([p, v])=>{
                        apps[p] = v(dispatch)
                    })
                    actions[a] = {...apps}
                }
            }
            else{
            actions[prop] = val(dispatch);
            }
        })
        types[type] = actions
    }
    return types
    
}
export default callAction