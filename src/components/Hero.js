export default function Hero() {
  return (
    <div className="bg-slate-900 text-slate-300 flex">
      <div>
        <h2>Lorem, ipsum.</h2>
        <span>Lorem ipsum dolor sit amet.</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          consequatur quae nostrum fugit distinctio, error magni voluptates
          labore facilis voluptatibus fugiat hic repellat obcaecati aspernatur
          ratione. Consectetur neque dignissimos dolorum.
        </p>
      </div>
      <div>
        <img
          src={require("../img/megumi.png")}
          alt="megumi"
          className="w-[80rem]"
        />
      </div>
    </div>
  )
}
