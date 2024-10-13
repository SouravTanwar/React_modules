import { useState, useReducer } from 'react'

const initialState =  {count: 0} ;

function filterreducer(state, {type}) {
  switch (type) {
    case "increment":
      return {count: state.count + 1} ;
    case "decrement":
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App() {
  
  const [state, filterdispatch] = useReducer(filterreducer,initialState)


  return (
    <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }}>
      Count: {state.count}
      <button onClick={() => filterdispatch({ type: "increment" })}>+</button>
      <button onClick={() => filterdispatch({ type: "decrement" })}>-</button>
    </div>
  )
}

export default App
