import React, { useState } from 'react';
import {Element} from 'react-scroll';
import img1 from "../Assest/Project.jpg";
import img2 from "../Assest/CloneProject.jpg";
import Projects from '../projects/Projects';
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const [choosen, setChoosen] = useState(true);

  const ClientProjects = [
    {
      img: img1,
      title: "Facebook",
      desc: "India's First Social Network where everyone find new people, post photos or videos about them and even follow new people.",
      link: "www.google.com",
    },
    {
      img: img1,
      title: "Facebook",
      desc: "India's First Social Network where everyone find new people, post photos or videos about them and even follow new people.",
      link: "www.google.com",
    },
    {
      img: img1,
      title: "Facebook",
      desc: "India's First Social Network where everyone find new people, post photos or videos about them and even follow new people.",
      link: "www.google.com",
    },
    {
      img: img1,
      title: "Facebook",
      desc: "India's First Social Network where everyone find new people, post photos or videos about them and even follow new people.",
      link: "www.google.com",
    },
    {
      img: img1,
      title: "Facebook",
      desc: "India's First Social Network where everyone find new people, post photos or videos about them and even follow new people.",
      link: "www.google.com",
    },
    {
      img: img1,
      title: "Facebook",
      desc: "India's First Social Network where everyone find new people, post photos or videos about them and even follow new people.",
      link: "www.google.com",
    },
  ];

  const CloneProjects = [
    {
      img: img2,
      title: "Airbnb clone",
      desc: "Clone of Airbnb with some functionalities like search rooms based on dates, etc.",
      link: "www.google.com",
    },
    {
      img: img2,
      title: "Airbnb clone",
      desc: "Clone of Airbnb with some functionalities like search rooms based on dates, etc.",
      link: "www.google.com",
    },
    {
      img: img2,
      title: "Airbnb Clone",
      desc: "Clone of Airbnb with some functionalities like search rooms based on dates, etc.",
      link: "www.google.com",
    },
    {
      img: img2,
      title: "Airbnb Clone",
      desc: "Clone of Airbnb with some functionalities like search rooms based on dates, etc.",
      link: "www.google.com",
    },
    {
      img: img2,
      title: "Airbnb Clone",
      desc: "Clone of Airbnb with some functionalities like search rooms based on dates, etc.",
      link: "www.google.com",
    },
    {
      img: img2,
      title: "Airbnb Clone",
      desc: "Clone of Airbnb with some functionalities like search rooms based on dates, etc.",
      link: "www.google.com",
    },
  ];
  

  return (
    <Element className="projectContainer" name="projects">
      <h1>Projects</h1>
      <p>Here are some projects to showcase</p>
      
      <div className="projectContainer__titles">
        <h4 className={choosen ? "projectContainer__titles--active" : undefined } onClick={()=>setChoosen(true)}>
          Projects
        </h4>
        <h4 className={choosen ? undefined : "projectContainer__titles--active" } onClick={()=>setChoosen(false)}>
          Clone Projects
        </h4>
      </div>

      {
        choosen ? (
          <div className="projectContainer__projects">
            {
              ClientProjects.map((project,index)=>(
                <Projects key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
              ))
            }
          </div>
        ) : (
          <div className="projectContainer__projects">
            {
              CloneProjects.map((project,index)=>(
                <Projects key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
              ))
            }
          </div>
        )
      }




      
    </Element>
  )
}

export default ProjectContainer