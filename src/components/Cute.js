import { useState } from "react"

export default function Cute() {
  const [fullscreen, setFullscreen] = useState(false)
  const [imgCute, setImgCute] = useState("")

  function closeBg(el) {
    if (el.id !== "cuteBg") return

    el.classList.toggle("hidden")
    setFullscreen(false)
  }

  return (
    <>
      <div
        id="cuteBg"
        className={
          fullscreen
            ? "fixed top-0 left-0 z-10 w-full h-screen bg-slate-700/75 p-4 grid place-content-center"
            : "hidden"
        }
        onClick={(e) => {
          closeBg(e.target)
        }}
      >
        <img src={imgCute.src} alt="img cute" className="opacity-100" />
      </div>
      <div className="mt-8 max-w-7xl m-auto md:flex md:gap-32 lg:gap-52">
        <div className="hidden md:block">
          <h1 className="font-bold md:text-xl lg:text-3xl">
            How cute she is...
          </h1>
          <p className="md:text-md lg:text-xl">なんて可愛いんだ</p>
          <h1 className="md:text-xl lg:text-3xl font-semibold text-yellow-400 xl:mt-8 lg:mt-6 md:mt-4">
            She's so cute isn't she.
          </h1>
          <p className="md:text-md lg:text-xl text-yellow-400">
            とてもかわいいですね。
          </p>
        </div>
        <div className="md:flex-1">
          <ul className="flex gap-4 md:gap-8 lg:gap-12">
            <li className="cute-li">
              <img
                onClick={(e) => {
                  setFullscreen(true)
                  setImgCute(e.target)
                }}
                src={require("../img/megumi1.jpg")}
                alt="megumi cute 1"
              />
            </li>
            <li className="cute-li">
              <img
                onClick={(e) => {
                  setFullscreen(true)
                  setImgCute(e.target)
                }}
                src={require("../img/megumi2.jpg")}
                alt="megumi cute 2"
              />
            </li>
            <li className="cute-li">
              <img
                onClick={(e) => {
                  setFullscreen(true)
                  setImgCute(e.target)
                }}
                src={require("../img/megumi3.jpg")}
                alt="megumi cute 3"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
