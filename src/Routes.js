import { Route, Routes } from "react-router-dom"
import Credits from "./pages/Credits"
import Home from "./pages/Home"

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="credits" element={<Credits />} />
    </Routes>
  )
}
