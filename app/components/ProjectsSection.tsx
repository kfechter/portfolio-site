'use client'

import { useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"

const featuredProjects = [
    {
        id: 1,
        title: "BudgetKeeper",
        description: ".NET Core Razor Pages app for tracking credit cards and loans",
        image: "/images/hero-image.png",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All", "Web"]
    },
    {
        id:2,
        title: "Calculendar",
        description: "Android App for calculating number of days between dates",
        image: "/images/hero-image.png",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All","Mobile"]
    },
    {
        id:3,
        title: "Lab551",
        description: "Android NFC App for card access",
        image: "/images/hero-image.png",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All","Mobile"]
    },
    {
        id: 4,
        title: "LaTeX Resume",
        description: "LaTeX resume with CI/CD Pipeline for publishing",
        image: "/images/hero-image.png",
        gitUrl: "/",
        previewUrl: "/",
        tag: ["All", "Misc"]
    },

]

export default function ProjectsSection() {
  const [tag, setTag] = useState("All")
  const handleTagChange = (newTag: string) => {
        setTag(newTag)
  }

  const filteredProjects = featuredProjects.filter((project) => project.tag.includes(tag))

  return (
    <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Featured Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag name="All" onClick={handleTagChange} isSelected={tag === "All"} />
            <ProjectTag name="Web" onClick={handleTagChange} isSelected={tag === "Web"} />
            <ProjectTag name="Mobile" onClick={handleTagChange} isSelected={tag === "Mobile"} />
            <ProjectTag name="Misc" onClick={handleTagChange} isSelected={tag === "Misc"} />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {
                filteredProjects.map((filteredProject) => <ProjectCard key={filteredProject.id} title={filteredProject.title} imgSrc={filteredProject.image} description={filteredProject.description} gitUrl={filteredProject.gitUrl} previewUrl={filteredProject.previewUrl}/>)
            }
        </div>
    </section>
  )
}
