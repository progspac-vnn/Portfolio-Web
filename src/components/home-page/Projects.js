import ProjectCards from "./ProjectCards"

const Projects = () => {
    const projects = [
        {
            imgSrc: "/assets/SmbhavProtoThumbnail.png",
            title: "ExportEase: AI Powered Solution for Seamless International Export Collaboration",
            description: "An AI powered web application for trade & communication between International Exporters & Importers",
        }
    ]

  return (
    <div className="max-w-screen-xl mx-auto py-12 md:py-12 md:py-36 text-white" id="projects">

        {/* heading */}
        <div className="flex flex-wrap gap-3 items-center mb-16">
            <p className="font-bold text-xl">01</p>
            <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">Projects</h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cold-1 md:grid-cols-2 items-center gap-12">
            {
                projects.map((project, index) => (
                    <ProjectCards key={index} 
                    imgSrc={project.imgSrc} 
                    title={project.title} 
                    description={project.description} 
                    /> 
                ))
            }
        </div>

    </div>
  )
}

export default Projects