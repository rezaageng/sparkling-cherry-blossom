import { Link } from "react-router-dom"
import HomeSVG from "../icons/HomeSVG"

export default function Navbar() {
  return (
    <nav className="navbar bg-slate-100 dark:bg-slate-900 max-w-7xl m-auto">
      <ul className="flex py-3 sm:gap-4">
        <Link to="/" className="p-2 nav-li rounded-xl group">
          <HomeSVG />
        </Link>

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
