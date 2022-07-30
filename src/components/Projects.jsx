import github from '../images/logos/github.svg'
import P1 from '../images/projects/p1.png'


const projects =[
                    {
                        id: 1,
                        title: 'Project 1',
                        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia quidem quaerat placeat distinctio dolorem.',
                        techStack: ['JavaScript', 'React', 'JavaScript', 'React', 'JavaScript'],
                        link: 'https://www.google.com',
                        image: P1
                    },
                    {
                        id: 2,
                        title: 'Project 2',
                        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia quidem quaerat placeat distinctio dolorem.',
                        techStack: ['JavaScript', 'React', 'JavaScript', 'React', 'JavaScript'],
                        link: 'https://www.google.com',
                        image: P1
                    },
                    {
                        id: 3,
                        title: 'Project 3',
                        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia quidem quaerat placeat distinctio dolorem.',
                        techStack: ['JavaScript', 'React', 'JavaScript', 'React', 'JavaScript'],
                        link: 'https://www.google.com',
                        image: P1
                    },
                    {
                        id: 4,
                        title: 'Project 4',
                        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia quidem quaerat placeat distinctio dolorem.',
                        techStack: ['JavaScript', 'React', 'JavaScript', 'React', 'JavaScript'],
                        link: 'https://www.google.com',
                        image: P1
                    },
                    {
                        id: 5,
                        title: 'Project 5',
                        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam laborum officia rem tenetur? Omnis, illo sit adipisci aliquid officiis quas et voluptates quis libero blanditiis vel sequi quidem ut.',
                        techStack: ['JavaScript', 'React', 'JavaScript', 'React', 'JavaScript'],
                        link: 'https://www.google.com',
                        image: P1
                    }
                ]
const Projects = () => {
    return (
        <div className="projects section">
            <div className="section__heading">
                What I've done
            </div>
            <div className="section__inner">
                <ul className="projectlist">
                    {projects.map(project => (
                        <li className={`project ${project.id%2===0? 'project-left':'project-right'}`} key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <div className="project-title">{project.title}</div>
                                <div className="project-info">{project.info}</div>
                                <ul className="project-techStack">
                                    {project.techStack.map((tech,idx) => (
                                        <li key={idx}>{tech}</li>
                                    ))}
                                </ul>                            
                                <div className="project-link">
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <img src={github} alt="github" />
                                    </a>
                                </div>
                            </div>  
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects;