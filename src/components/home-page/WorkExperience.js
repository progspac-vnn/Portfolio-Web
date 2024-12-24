import React from 'react'
import WorkExperienceItem from './WorkExperienceItem'

const WorkExperience = () => {
  
    

    const experiences = [
        {
            date: "Jun, 2024 - August, 2024",
            title: "Technology Summer Intern",
            company: "Barclays Bank India",
            description: "Gained a deep understanding of the company culture and effectively collaborated within a team setting, embracing and practicing the Scrum methodology to align with the team’s agile workflow. On the technical front, I designed and developed a REST API as an isolated service in ASP.NET, seamlessly integrating it with the SIT MongoDB and internal systems. Additionally, I implemented an in-memory SQL query solution to deliver real-time trade reports for the operations team and mapped trade flow processes for post-trade confirmations, enhancing operational clarity and efficiency.\n              Tech Stack: ASP.NET, C-sharp, SQL Server, REST API, Bitbucket, MongoDB."
        }
    ];
    
  
    return (
    <div className='py-28 max-w-screen-xl mx-auto' id="work-experience">
        {/* Section Heading  */}
        <div className="space-y-6">
            <span className="flex flex-wrap gap-3 items-center mb-16">
            <p className="text-white font-bold text-xl">02</p>
            <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">Work Experience</h2>
            </span>
        
            {/* Work Experience */}

            {
                experiences.map((experience, index) => (
                    <WorkExperienceItem 
                    key={index}
                    date={experience.date}
                    title={experience.title}
                    company={experience.company}
                    description={experience.description}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default WorkExperience