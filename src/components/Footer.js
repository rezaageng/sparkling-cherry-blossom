import Deviantart from "../icons/Deviantart"
import Pixiv from "../icons/Pixiv"

export default function Footer() {
  return (
    <footer className="max-w-7xl m-auto mt-14 text-xs">
      <ul className="flex gap-4 justify-end">
        <li>
          <a
            href="https://www.deviantart.com/alpha706/art/Mieruko-Chan-Design-Edit-894647384"
            target="_blank"
            rel="noreferrer"
            className="group flex gap-2 footer-hover"
          >
            <Deviantart />
            Original web design
          </a>
        </li>
        <li>|</li>
        <li>
          <a
            href="https://www.pixiv.net/en/artworks/48373553"
            target="_blank"
            rel="noreferrer"
            className="group flex gap-2 footer-hover"
          >
            <Pixiv />
            Original artwork
          </a>
        </li>
      </ul>
    </footer>
  )
}
