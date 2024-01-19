import React from 'react';
import { Element } from 'react-scroll';
import ExperienceBox from '../ExperienceBox/ExperienceBox';
import "./ExperienceComponent.css"

const ExperienceComponent = () => {
  return (
    <Element id="experience" className="experienceContaier">
        <h1>Experience</h1>
        <div className="experienceContaier__info">
            <ExperienceBox number="0+" title="Clients"/>
            <ExperienceBox number="0+" title="Projects" style={{backgroundColor:"orange"}}/>
            <ExperienceBox number="0+" title="Working"/>
        </div>
    </Element>
  )
}

export default ExperienceComponent