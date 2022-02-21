export default function Alert() {
  function closeAlert(el) {
    if (el.tagName !== "BUTTON") return

    localStorage.setItem("alert", "true")
    return el.parentElement.classList.toggle("hidden")
  }

  return (
    <div
      onClick={(e) => {
        closeAlert(e.target)
      }}
      className="grid fixed bottom-4 bg-pink-600 md:max-w-lg m-auto p-4 rounded-xl left-1/2 -translate-x-1/2 text-slate-300"
    >
      <p>
        The images fetched from API, I'm not responsible if there is an NSFW
        images
      </p>
      <button className="ease-in-out bg-yellow-400 justify-self-end py-1 px-4 rounded-md text-gray-800 mt-4 hover:bg-yellow-500 ">
        Accept
      </button>
    </div>
  )
}
