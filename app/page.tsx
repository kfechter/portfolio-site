import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"
import NavBar from "./components/NavBar"
import SocialSection from "./components/SocialSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ProjectsSection />
        <SocialSection />
      </div> 
      <Footer />
    </main>
  )
}
