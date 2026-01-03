import Button from "../ui/Button"
export default function ProjectCard ({title, description,tech, link, image}) {
    return (
        <div className="project-item">
            <img src={image} alt={title} />
            
            <div className="project-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-tech">
                {tech.map((item, index)=> (
                    <span key={index}>{item}</span>
                ))}
            </div>
            <a href={link} target="_blank">
                <Button variant="secondary">Lihat project</Button>
            </a>
            </div>
        </div>
    )
}