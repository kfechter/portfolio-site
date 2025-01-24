'use client'

import { useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"

const featuredProjects = [
    {
        id: 1,
        title: "BudgetKeeper",
        description: ".NET Core Razor Pages app for tracking credit cards and loans",
        image: "/images/projects/budgetkeeper.png",
        gitUrl: "https://github.com/kfechter/BudgetKeeper",
        previewUrl: "https://github.com/kfechter/BudgetKeeper",
        tag: ["All", "Web"]
    },
    {
        id:2,
        title: "Calculendar",
        description: "Android App for calculating number of days between dates",
        image: "/images/projects/calculendar.png",
        gitUrl: "https://github.com/kfechter/Calculendar",
        previewUrl: "https://play.google.com/store/apps/details?id=com.kennethfechter.calculendar",
        tag: ["All","Mobile"]
    },
    {
        id:3,
        title: "Lab551",
        description: "Formerly an HCE access app, will be rebuilt as a new app",
        image: "/images/projects/lab-551.png",
        gitUrl: "https://github.com/kfechter/Lab551",
        previewUrl: "https://github.com/kfechter/Lab551",
        tag: ["All","Mobile"]
    },
    {
        id: 4,
        title: "LaTeX Resume",
        description: "LaTeX resume with CI/CD Pipeline for publishing",
        image: "/images/projects/resume.png",
        gitUrl: "https://github.com/kfechter/kfechter-resume-latex",
        previewUrl: "https://github.com/kfechter/kfechter-resume-latex",
        tag: ["All", "Misc"]
    },
    {
        id: 5,
        title: "VSCode Extension",
        description: "Helper for MU Tianocore dependency updates",
        image: "/images/projects/extension.png",
        gitUrl: "https://github.com/kfechter/mu-tiano-dependency-updater",
        previewUrl: "https://marketplace.visualstudio.com/items?itemName=thesecondken.mu-tiano-dependency-updater",
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
