import Image from "next/image"

const Skills = () => {

    const icons = [
        "/assets/python.png",
        "/assets/java.png",
        "/assets/matlab.png",
        "/assets/DotNet.png",
        "/assets/sql-server.png",
        "/assets/Docker.png",
        "/assets/amazon-web-services.png",
      ];
       

  return (
    <div className='py-28 max-w-screen-xl mx-auto' id="work-experience">
        {/* Section Heading  */}
        <div className="space-y-6">
            <span className="flex flex-wrap gap-3 items-center mb-16">
            <p className="text-white font-bold text-xl">03</p>
            <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">Skills</h2>
            </span>
        <div className="overflow-hidden w-full mt-5">
                <div className="flex items-center space-x-16 animate-marquee">
                    {
                        icons.map((icon, index) => (
                            <div
                                key={index}
                                className="group flex-shrink-0 transform transition-all duration-300 hover:scale-110"
                            >
                                <Image
                                width={600}
                                height={600}
                                    src={icon}
                                    alt={`Icon ${index + 1}`}
                                    className="w-16 h-16 mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills