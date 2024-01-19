import React from 'react';
import {Element} from 'react-scroll';
import LinearProgress from '@mui/material/LinearProgress';
import "./Skillset.css";
import Skillsetimg from "../Assest/SkillSetImg.jpg"; 

const Skillset = () => {
  return (
    <Element id="skills" className="skillSet">
        <div className="skillSet__img">
            <img src={Skillsetimg} alt="" />
        </div>

        <div className="skillSet__text">
            <h1>SKILLSET</h1>
            <div className="skillSet__progress">
                <h5>HTML</h5>
                <div className="skillSet__slider skillSet__slider1">
                    <LinearProgress variant="determinate" value={90}/>
                </div>
            </div>
            <div className="skillSet__progress">
                <h5>CSS</h5>
                <div className="skillSet__slider skillSet__slider2">
                    <LinearProgress variant="determinate" value={80}/>
                </div>
            </div>
            <div className="skillSet__progress">
                <h5>Java Script</h5>
                <div className="skillSet__slider skillSet__slider3">
                    <LinearProgress variant="determinate" value={50}/>
                </div>
            </div>
            <div className="skillSet__progress">
                <h5>React</h5>
                <div className="skillSet__slider skillSet__slider4">
                    <LinearProgress variant="determinate" value={70}/>
                </div>
            </div>
            <div className="skillSet__progress">
                <h5>C Programming</h5>
                <div className="skillSet__slider skillSet__slider5">
                    <LinearProgress variant="determinate" value={40}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Skillset