import React from 'react';
import "./Topcontent.css";

const Topcontent = () => {
  return (
    <div className="topcontent">
        <div className="topcontent__container">
            <h1>Nellaiappan <span>V</span></h1>
            <p>Fresh<span>er</span></p>
            <a href="www.google.com">
                <button>Download CV</button>
            </a>
        </div>
    </div>
  )
}

export default Topcontent