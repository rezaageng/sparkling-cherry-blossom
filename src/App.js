import Navbar from "./components/Navbar"
import Routing from "./Routes"

function App() {
  return (
    <div className="App bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-slate-300 h-screen">
      <Navbar />
      <Routing />
    </div>
  )
}

export default App
