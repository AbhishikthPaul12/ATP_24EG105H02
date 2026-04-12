import { Children } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

//Create context provider object
export const counterContextObject=createContext() 

function ContextProvider({children}) {
  //State
  const [counter,setCounter]=useState(0)

  //Function to increase count
  const incrementCount=()=>{
    setCounter(counter+1)
  }

  //Function to decrease count
  const decrementCount=()=>{
    setCounter(counter-1)
  }

  return (
    <counterContextObject.Provider value={{counter,incrementCount,decrementCount}}>
    {children}
    </counterContextObject.Provider>
  )
}

export default ContextProvider