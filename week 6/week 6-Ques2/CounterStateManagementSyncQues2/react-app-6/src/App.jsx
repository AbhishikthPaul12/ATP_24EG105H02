import EditCounter1 from "./components/EditCounter1"
import EditCounter2 from "./components/EditCounter2"
import EditCounter3 from "./components/EditCounter3"
import EditCounter4 from "./components/EditCounter4"

function App() {
  return (
    <div className="grid grid-cols-2 gap-16 place-items-center mt-20">
      {/**Nesting all counters in app component */}
      <EditCounter1/>
      <EditCounter2/>
      <EditCounter3/>
      <EditCounter4/>
    </div>
  )
}

export default App