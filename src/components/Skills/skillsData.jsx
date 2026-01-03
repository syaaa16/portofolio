import skills from "./Skills";

export default function Skills (){
    return(
        <section id="skills">
            <div className="skills-container">
                <h2>Skills</h2>

                <div className="skill-list">
                    {skills.map((skill)=> (
                        <div className="skills-card" key={skill.id}>
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
    </section>
    )
}