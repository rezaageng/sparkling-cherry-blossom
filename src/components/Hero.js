import RightArrow from "../icons/RightArrow"

export default function Hero() {
  return (
    <div className="bg-pink-600 text-slate-300 md:flex md:flex-row-reverse max-w-7xl m-auto rounded-[3rem] md:relative px-12 pb-12 md:p-0 md:px-0">
      <div className="flex-1 pt-4 border-b-2 md:border-0 md:p-0">
        <img
          src={require("../img/megumi.png")}
          alt="megumi"
          className="w-80 m-auto md:absolute md:bottom-0 sxl:w-[26rem]"
        />
      </div>
      <div className="flex-1 mt-8 md:p-14 md:m-0 sxl:p-20">
        <h1 className="text-4xl font-bold sxl:text-6xl">Katō Megumi</h1>
        <h2 className="text-xl font-semibold opacity-75 md:mt-2 mb-3 md:mb-5 sxl:mb-8">
          Saekano: How to Raise a Boring Girlfriend
        </h2>
        <p>
          Megumi is a cute girl with straight shoulder-length chestnut-brown
          hair that is usually worn down but it is long enough to be tied up
          into a ponytail, dark brown eyes and she is described to have "perfect
          proportions". Megumi is usually seen with her school uniform, or else,
          casual clothes.
        </p>
        <div className="group ease-in-out text-2xl md:text-3xl text-yellow-400 font-semibold mt-3 sxl:mt-36 md:mt-5 hover:text-yellow-500">
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
