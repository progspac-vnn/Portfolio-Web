import react from "react"
import Image from "next/image"

const ProjectCards = ({imgSrc, title, description}) => {
  return (
    <div className="relative flex-1 group" style={{overflow: "hidden"}}>
      <div>
        <Image height={600} width={600} src={imgSrc} alt="smbhav hackathon prototype" className="w-full h-[300px] md:h-[500px] object-cover rounded-[30px] md:rounded-[100px] shadow-md" />
      </div>
    </div>
  )
}

export default ProjectCards