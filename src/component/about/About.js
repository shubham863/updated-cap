import React from 'react'
import './About.css';
import keywords from '../../image/keywords.png';
import operators from '../../image/operators.png';
import variable from '../../image/variable.png';


function About() {
  return (
    <div className="interface">
    <div className="row">
      <div className="card">
        <img src={keywords}  alt="Column 1" />
        <div className="card-content">
          <h2>Column 1 Heading</h2>
          <p> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
      <div className="card">
        <img src={operators} alt="Column 2" />
        <div className="card-content">
          <h2>Column 2 Heading</h2>
          <p> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
      <div className="card">
        <img src={variable} alt="Column 3" />
        <div className="card-content">
          <h2>Column 3 Heading</h2>
          <p> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="card">
        <img src={keywords} alt="Column 4" />
        <div className="card-content">
          <h2>Column 4 Heading</h2>
          <p> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
      <div className="card">
        <img src={variable} alt="Column 5" />
        <div className="card-content">
          <h2>Column 5 Heading</h2>
          <p> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
      <div className="card">
        <img src={operators} alt="Column 6" />
        <div className="card-content">
          <h2>Column 6 Heading</h2>
          <p> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About

