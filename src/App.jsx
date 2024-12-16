import FeatureSection from "./components/FeatureSection.jsx"
import Fotter from "./components/Footer.jsx"
import HeroSection from "./components/HeroSection.jsx"
import NavBar from "./components/NavBar.jsx"
import Price from "./components/Price.jsx"
import Testimonial from "./components/Testimonial.jsx"
import WorkFlowSection from "./components/WorkFlowSection.jsx"

function App() {
  return (
    <>
      <NavBar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeatureSection/>
        <WorkFlowSection/>
        <Price/>
        <Testimonial/>
        <Fotter/>
      </div>
    </>
  )
}
export default App
