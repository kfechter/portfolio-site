import Image from "next/image"
import HeroName from "./HeroName"

const profileName = {
  name: "Kenneth"
}

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-500">Hello, I&apos;m </span>
            <br/>
            <HeroName nameProps={profileName}/>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
              Software engineer with experience in full stack development, 
              devops engineering, CI/CD, and technical marketing. My skills 
              include C#, JavaScript, Python, Kotlin, Git, and SQL. I 
              always look to expand my skillset as well as contribute 
              to open source projects.
          </p>
          <div>
            <form action="https://github.com/kfechter/kfechter-resume-latex/releases/latest/download/resume.pdf">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Download CV</button>
            </form>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 container">
            <Image
              src="/images/hero-image.png" 
              alt="Hero Image"
              className="rounded-full bg-[#181818] w-[250px] h-[250px] place-self-center"
              width={300}
              height={300} />
        </div>
      </div>
    </section>
  )
}
