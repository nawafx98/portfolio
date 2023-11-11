import {useEffect, useState} from "react";

export default function Skills() {
  const [extraClasses,setExtraClasses] = useState('');
  return (
    <section id="skills">
      <div className="center">
        <h2>Skills</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box"><img src="/img/python.png" alt=""/><span>Python</span></div>
          <div className="skill-box"><img src="/img/tableau.png" alt=""/><span>Tableau</span></div>
          <div className="skill-box"><img src="/img/sql.png" alt=""/><span>SQL</span></div>
          <div className="skill-box"><img src="/img/database.png" alt=""/><span>MongoDB</span></div>
          <div className="skill-box"><img src="/img/tensorflow.png" alt=""/><span>Tensorflow</span></div>
          <div className="skill-box"><img src="/img/pytorch.png" alt=""/><span>Pytorch</span></div>
          <div className="skill-box"><img src="/img/git.png" alt=""/><span>Git</span></div>
          <div className="skill-box"><img src="/img/power.png" alt=""/><span>Power BI</span></div>
        </div>
      </div>
    </section>
  );
}