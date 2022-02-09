import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Routing from "./Routes"

function App() {
  return (
    <div className="App px-4 pb-4 bg-slate-100 text-gray-800 dark:bg-slate-900 dark:text-slate-300 min-h-screen">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  )
}

export default App
