import React, {createContext, useCallback, useMemo, useReducer} from 'react';
import {combineReducer, allReducers} from './reducers';
import callAction, {actionTypes} from './actions';

const GlobalState = createContext({})

const ContextProvider = (props) => {
  const {children} = props;
  
  const reducer = useCallback(()=>{
    return combineReducer(allReducers)
  }, [combineReducer]);

  const [mainReducer, initialState] = reducer();

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const actions = callAction(dispatch, actionTypes);

  const contextValue = useMemo(()=> {
    console.log("global state: ", {state, actions})
    return {state, actions}
  }, [state, dispatch]);

  return (
    <GlobalState.Provider value={contextValue}>
      {children}
    </GlobalState.Provider>
  )

}


export {ContextProvider, GlobalState as ContextConsumer};




