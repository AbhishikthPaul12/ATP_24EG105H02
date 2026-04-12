import {useContext} from 'react'
import { counterContextObject } from '../contexts/ContextProvider'

function EditCounter4() {
    const {counter,incrementCount,decrementCount}=useContext(counterContextObject)
  return (
    <div className="bg-orange-400 shadow-md rounded-xl p-6 w-56 text-center">
      {/**Heading */}
        <h1 className="text-xl font-semibold mb-2">EditCounter4</h1>
        {/**Count value */}
        <p className="text-3xl mb-3">{counter}</p>
        <div className="flex justify-center gap-4">
          {/**Buttons */}
            <button onClick={incrementCount} className="bg-violet-600 p-2 text-2xl rounded-xl">+</button>
            <button onClick={decrementCount} className="bg-violet-600 p-2 text-2xl rounded-xl">-</button>
        </div>
    </div>
  )
}

export default EditCounter4