import React, { createContext, useContext, useState } from "react";

const MyContext = createContext('initial')

function App() {
  const [value, setValue] = useState('Hello World')

  const changeValue = (newValue) => {
    setValue(newValue)
  }
  return (
    <MyContext.Provider value={{value, changeValue}}>
      <Example1 />
      <Example2 />
    </MyContext.Provider>
  );
}

function Example1(){
  const {value, changeValue} = useContext(MyContext)

  return (
    <div>
      <p>The current value is '{value}'</p>
      <button onClick={() => changeValue('Example1 Value')}>Example1: Click me to Change Value</button>
    </div>
  )
}

function Example2(){
  const {value, changeValue} = useContext(MyContext)

  return (
    <div>
      <p>The current value is '{value}'</p>
      <button onClick={() => changeValue('Example2 Value')}>Example2: Click me to Change Value</button>
    </div>
  )
}

export default App;
