import { useRef, useEffect } from 'react'
import github from '../images/logos/github.svg'
import qnap from '../images/projects/qnap.png'
import portfolio from '../images/projects/portfolio.png'
import stock_prediction from '../images/projects/stock_prediction.png'
import gesture_keyboard from '../images/projects/gesture_keyboard.png'
import noble_prize from '../images/projects/noble_prize.png'
import despeckling from '../images/projects/despeckling.png'
import outlook_search from '../images/projects/outlook_search.png'
import gitignore_generator from '../images/projects/gitignore_generator.png'
import noImage from '../images/projects/no_image.png'



const projects = [
    {
        id: 1,
        title: 'PDF4me QNAP App',
        info: 'A QNAP NAS App that uses PDF4me API to automate the various tasks of PDF processing. This app was made during my internship.',
        techStack: ['Python', 'Django', 'Docker', 'JavaScript', 'Bash', 'SQLlite', 'REST API'],
        link: '',
        image: qnap
    },
    {
        id: 9,
        title: 'Willis Towers Watson (automation: STIF entries, Position recon, Trade Costs & Matching)',
        info: "Assisted a WTW analyst with Python / Azure project they were working on. Developed multiple scripts utilizing Microsoft's Graph API, Python, and FAST API to streamline various automation tasks, including searching for files in mails, extracting information from PDFs and Excel files and employing this data for calculations, updates, and modifications of Excel and PDF files, and converting data to JSON and XML formats. The script was deployed on the Microsoft Azure Functions platform as a serverless backend application. Later, it was seamlessly integrated as a custom connector within Microsoft's Power Automate platform to enhance relevant workflow processes. This innovative software significantly reduced the workload for analysts and associates by automating tasks that were previously carried out manually, resulting in substantial time savings.",
        techStack: ['Python', 'REST', 'Microsoft Graph', 'Microsoft Power Tools', 'Azure', 'Azure Function', 'ML'],
        link: '',
        image: noImage
    },
    {
        id: 2,
        title: ' Developer Portfolio',
        info: 'This portfolio website acts as an extension to my resume with the aim of showcasing my skills and projects. The website is hosted on Linode\'s cloud server.',
        techStack: ['React', 'JavaScript', 'Node.js', 'Sass', 'HTML', 'NGINX'],
        link: 'https://github.com/thomasdevasia/portfolio',
        image: portfolio
    },
    {
        id: 8,
        title: 'Gitignore Generator',
        info: 'A VSCode extension that generates .gitignore file for the project. The extension uses the gitignore.io API to fetch the .gitignore file.',
        techStack: ['Javascript', 'Typescript', 'Node.js', 'VSCode Extension API'],
        link: 'https://github.com/thomasdevasia/gitignoregenerator.git',
        image: gitignore_generator
    },
    {
        id: 3,
        title: 'Outlook Search API using Microsoft Graph',
        info: 'I created this project for a friend of mine to automate his task. This project search for emails in Outlook, then searches inside the attachments of the emails for the relevant keywords and download those files.',
        techStack: ['Python', 'Microsoft Graph', 'REST API'],
        link: 'https://github.com/thomasdevasia/outlook_graph.git',
        image: outlook_search
    },
    {
        id: 4,
        title: 'Despeckling SAR image',
        info: 'As a part of my final MSc Dissertation I had to use deep image prior (Based on deep convolutional Neural) to denoise the SAR images.',
        techStack: ['PyTorch', 'Python', 'Deep CNN'],
        link: 'https://github.com/thomasdevasia/deep-image-prior.git',
        image: despeckling
    },
    {
        id: 5,
        title: 'Stock Prediction',
        info: 'This jupyter notebook uses a LSTM model to predict the stock price of a company. The model is trained on the historical stock price data of the company.',
        techStack: ['Python', 'LSTM', 'CNN', 'Tensorflow', 'Keras'],
        link: 'https://github.com/thomasdevasia/stock_prediction',
        image: stock_prediction
    },
    {
        id: 6,
        title: 'Gesture Keyboard',
        info: 'The device uses aerial gestures to write on the screen. This was made using Arduino Nano microcontroller, Bluetooth module and Gyroscope sensor. ',
        techStack: ['Arduino', 'Python', 'scikit-learn', 'tkinter'],
        link: '',
        image: gesture_keyboard
    },
    {
        id: 7,
        title: 'Visualizing Nobel laureates using Dash',
        info: 'A web application that visualizes the Nobel laureates using Plotly\'s Dash framework. The data is fetched from the Nobel Prize API.',
        techStack: ['Python', 'JavaScript', 'HTML', 'CSS', 'Plotly', 'Dash'],
        // link: 'https://github.com/thomasdevasia/DAV_21099593',
        link: 'https://github.com/thomasdevasia/DAV_21099593/tree/main/python',
        image: noble_prize
    }
]
const Projects = () => {

    const projectRef = useRef();


    useEffect(() => {
        const ObserverOptions = {
            threshold: 0.1
        }
        const Observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                projectRef.current.classList.add('slidein');
            }
        }, ObserverOptions);
        Observer.observe(projectRef.current);
    }, [])

    return (
        <div className="projects section initialState" ref={projectRef} id='portfolio'>
            <div className="section__heading">
                What I've done
            </div>
            <div className="section__inner">
                <ul className="projectlist">
                    {projects.map((project, index) => (
                        <li className={`project ${index % 2 === 0 ? 'project-right' : 'project-left'}`} key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <div className="project-title"><b>{project.title}</b></div>
                                <div className="project-info">{project.info}</div>
                                <ul className="project-techStack">
                                    {project.techStack.map((tech, idx) => (
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