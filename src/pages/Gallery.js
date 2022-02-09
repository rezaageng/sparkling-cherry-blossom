import Danbooru from "danbooru"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

export default function Gallery() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const booru = new Danbooru("http://safebooru.donmai.us/")
    async function getImage() {
      const request = await booru.posts({ tags: "katou_megumi", limit: 75 })

      setImages(request)
    }
    getImage()
  }, [])

  return (
    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <div className="max-w-7xl m-auto columns-5 gap-4">
        {images.map((image) => (
          <div className="rounded-3xl mb-4 overflow-hidden">
            <img
              src={image.file_url}
              alt="katou"
              key={image.id}
              className="transition-transform hover:scale-110 hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  )
}
