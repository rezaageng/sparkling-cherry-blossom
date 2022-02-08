import RightArrow from "../icons/RightArrow"

export default function Hero() {
  return (
    <div className="bg-pink-600 text-slate-300 md:flex md:flex-row-reverse xl:m-auto mx-4 max-w-7xl m-auto rounded-[3rem] relative">
      <div className="flex-1">
        <img
          src={require("../img/megumi.png")}
          alt="megumi"
          className="w-96 m-auto md:absolute md:bottom-0 md:w-[26rem]"
        />
      </div>
      <div className="flex-1 p-20">
        <h1 className="text-6xl font-bold">Katō Megumi</h1>
        <h2 className="text-xl font-semibold opacity-75 mt-2 mb-8">
          Saekano: How to Raise a Boring Girlfriend
        </h2>
        <p>
          Megumi is a cute girl with straight shoulder-length chestnut-brown
          hair that is usually worn down but it is long enough to be tied up
          into a ponytail, dark brown eyes and she is described to have "perfect
          proportions". Megumi is usually seen with her school uniform, or else,
          casual clothes.
        </p>
        <div className="group ease-in-out text-3xl text-yellow-400 font-semibold mt-36 hover:text-yellow-500">
          <a
            href="https://saekano.fandom.com/wiki/Megumi_Kato"
            target="_blank"
            rel="noreferrer"
            className="ease-in-out flex gap-5"
          >
            More about Megumi
            <span className="animate-bounce-right">
              <RightArrow />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
