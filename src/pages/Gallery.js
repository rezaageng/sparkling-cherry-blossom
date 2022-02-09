import Danbooru from "danbooru"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

export default function Gallery() {
  const [images, setImages] = useState([])
  const [fullscreen, setFullscreen] = useState(false)
  const [imgCute, setImgCute] = useState("")

  useEffect(() => {
    const booru = new Danbooru("http://safebooru.donmai.us/")
    async function getImage() {
      const request = await booru.posts({ tags: "katou_megumi", limit: 75 })

      setImages(request)
    }
    getImage()
  }, [])

  function closeBg(el) {
    if (el.id !== "cuteBg") return

    el.classList.toggle("hidden")
    setFullscreen(false)
  }

  return (
    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
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
        <img
          src={imgCute.src}
          alt="img cute"
          className="opacity-100 max-w-3xl"
        />
      </div>
      <div className="max-w-7xl m-auto columns-5 gap-4">
        {images.map((image) => (
          <div key={image.id} className="rounded-3xl mb-4 overflow-hidden">
            <img
              src={image.file_url}
              alt="katou"
              className="transition-transform hover:scale-110 hover:cursor-pointer"
              onClick={(e) => {
                setFullscreen(true)
                setImgCute(e.target)
              }}
            />
          </div>
        ))}
      </div>
    </>
  )
}
