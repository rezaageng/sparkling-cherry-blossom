import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar bg-slate-200 dark:bg-slate-800">
      <ul className="flex p-3">
        <li className="nav-li nav-hover">
          <Link to="/" className="p-2">
            Home
          </Link>
        </li>
        <li className="nav-li nav-hover">
          <Link to="/credits" className="p-2">
            Credits
          </Link>
        </li>
      </ul>
    </nav>
  )
}
