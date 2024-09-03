import About from "./components/About"
import Cards from "./components/Cards"
import Eye from "./components/Eye"
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import LocomotiveScroll from "locomotive-scroll"

function App() {

  const locomotiveScroll = new LocomotiveScroll()

  return (
    <div className="min-h-screen w-full text-white bg-zinc-900">
        <Navbar />
        <Landing />
        <Marquee />
        <About />
        <Eye />
        <Featured />
        <Cards />
        <Footer />
    </div>
  )
}

export default App
