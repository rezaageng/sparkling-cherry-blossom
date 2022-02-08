import { Helmet } from "react-helmet-async"
import Cute from "../components/Cute"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sparkling Cherry Blossom</title>
      </Helmet>
      <Hero />
      <Cute />
    </>
  )
}
