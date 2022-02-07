import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar bg-slate-900">
      <ul className="flex p-3 gap-4">
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
        <li className="nav-li">
          <a
            href="https://github.com/rezaageng/sparkling-cherry-blossom"
            className="p-2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  )
}
