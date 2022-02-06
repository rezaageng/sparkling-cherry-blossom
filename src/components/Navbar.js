import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar bg-slate-800">
      <ul className="flex p-3">
        <li className="nav-li">
          <Link to="/" className="p-2">
            Home
          </Link>
        </li>
        <li className="nav-li">
          <Link to="/credits" className="p-2">
            Credits
          </Link>
        </li>
      </ul>
    </nav>
  )
}
