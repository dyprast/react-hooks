import React, { useReducer } from 'react';
// import logo from './logo.svg';
import './App.css';
// import HookFetchEffect from './components/HookFetchEffect';
// import HookFetchReducer from './components/HookFetchReducer';
// import HookCallbackParent from './components/HookCallbackParent';
// import HookUseMemo from './components/HookUseMemo'
// import HookUseRef from './components/HookUseRef';
// import HookUseRefTimer from './components/HookUseRefTimer';
// import HookUseCustom from './components/HookUseCustom';
import HookUseCustomTwo from './components/HookUseCustomTwo';
// import HookUseCustomThree from './components/HookUseCustomThree';

// import HookUseState from './components/HookUseState';
// import HookUseStateTwo from './components/HookUseStateTwo';
// import HookUseStateThree from './components/HookUseStateThree';
// import HookUseStateFour from './components/HookUseStateFour';
// import HookUseEffect from './components/HookUseEffect';
// import ClassUseEffect from './components/ClassUseEffect';
// import ClassUseEffectTwo from './components/ClassUseEffectTwo';
// import HookUseEffectTwo from './components/HookUseEffectTwo';
// import MouseHook from './components/MouseHook';
// import ClassUseEffectThree from './components/ClassUseEffectThree';
// import HookUseEffectThree from './components/HookUseEffectThree';
// import HookDataFetch from './components/HookDataFetch';
// import HookContextA from './components/HookContextA';
// import HookReducer from './components/HookReducer';
// import RedContA from './components/RedContA';
// import RedContB from './components/RedContB';

// export const UserContext = React.createContext()
// export const AgeContext = React.createContext()


// export const ExpPass = React.createContext()

// const count = 0
// const reducer = (state,action) =>{
//     switch(action){
//       case "plus":
//         return state+1
//       case "minus":
//         return state-1
//       case "reset":
//         return count
//       default:
//         return state
//     }
// }

function App() {
  // const [numb,dispatch] = useReducer(reducer,count)
  return (
    // <ExpPass.Provider value={{numbX : numb,dispatchX : dispatch}}>
    <div className="App">
        {/* <HookUseState/> */}
        {/* <HookUseStateTwo/> */}
        {/* <HookUseStateThree/> */}
        {/* <HookUseStateFour/> */}
        {/* <HookUseEffect/> */}
        {/* <ClassUseEffect/> */}
        {/* <ClassUseEffectTwo/> */}
        {/* <HookUseEffectTwo/> */}
        {/* <MouseHook/> */}
        {/* <ClassUseEffectThree/>
        <HookUseEffectThree/> */}
        {/* <HookDataFetch/> */}
        {/* <UserContext.Provider value={'Abid'}>
          <AgeContext.Provider value={17}>
          <HookContextA/>
          </AgeContext.Provider>
        </UserContext.Provider> */}
        {/* <HookReducer/> */}
        {/* Number {numb}
        <RedContA/>
        <RedContB/> */}
        {/* <HookFetchEffect/> */}
        {/* <HookFetchReducer/> */}
        {/* <HookCallbackParent/> */}
        {/* <HookUseMemo/> */}
        {/* <HookUseRef/> */}
        {/* <HookUseRefTimer/> */}
        {/* <HookUseCustom/> */}
        <HookUseCustomTwo/>
        {/* <HookUseCustomThree/> */}
    </div>
    // {/* </ExpPass.Provider> */}
  );
}

export default App;
