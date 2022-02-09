import { Route, Routes } from "react-router-dom"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
  )
}
