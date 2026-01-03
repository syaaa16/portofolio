import Project from '../../data/Projects'
import ProjectCard from './ProjectCard'

export default function Projects(){
    return (
        <section id="projects">
            <div className="projects-container">
                <h2>projects</h2>

                <div className='project-card'>
                    {Project.map((project)=> {  
                        return (
                            <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            image={project.image}
                            link={project.link}
                        />
                        )
                    })}
                </div>
            </div>
        </section>
    )

}