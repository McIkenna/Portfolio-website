import React, { Component, useEffect } from 'react'
import styles from "./Dashboard.module.css"

import {connect} from "react-redux";
import {getInfo} from "../actions/InfoActions"
import PropTypes from "prop-types";
import InfoItem from "./Info/InfoItem"
import EducationItem from './Education/EducationItem';
import {getAllEducation} from "../actions/EduActions"
import WorkItem from './Work/WorkItem';
import {getWorks} from "../actions/WorkActions"
import ProjectItem from './Project/ProjectItem'
import {getProjects} from "../actions/ProjectActions"
import {getSkills} from "../actions/SkillAction"
import SkillItem from './Skill/SkillItem';
import Spinner from "./Spinner/Spinner"





class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      loading: true,
    }
  }
  componentDidMount(){
    this.props.getInfo();
    this.props.getAllEducation();
    this.props.getWorks();
    this.props.getProjects();
    this.props.getSkills();
  }



    render() {

      let {infos} = this.props.info
      let {educations} = this.props.education
      let {works} = this.props.work
      let {projects, loading} = this.props.project
      let {skills} = this.props.skill
     // let {tasks} = this.props.task
      
      
  


  return (

    loading ? <Spinner/> : (
 
<div className={styles.body}>
<div className = {styles.dashbody}>
  <div className={styles.main}>
  
  
    <div className={styles.info}>
      {infos.map(info => (
        <InfoItem key={info.id} info = {info}/>
      ))}
      </div>
   
    <div className={styles.work_cover}><h4>Work Experience</h4>
 
<div className={styles.work} > 
  {works.map(work => <WorkItem key={work.id} work ={work}/>)}
  </div>
  <div className={styles.infoWave}>
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shape_fill}></path>
    </svg>
      </div>
  </div>

  <div>
  <div className={styles.task_cover}><h4>Project Undertaken</h4>
  <div className={styles.task}>
    {projects.map(project => <ProjectItem key = {project.id} project ={project} /> )}
  </div>
  </div>

  </div>

  <div className={styles.education_cover}>   
  <div className={styles.infoWaveBottom}>
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shape_fillBottom}></path>
    </svg>
</div>
<div className={styles.education_inner}>

    <h4>Education / Certification</h4>
  <div className={styles.education}>
  {educations.map(education =>  <EducationItem key={education.id} education = {education}/>)}
  </div>
  </div>
    
</div>
 
  <div>
  <div className={styles.skill_cover}><h4>Skills</h4>
  <div className={styles.skill}>{skills.map(skill => <SkillItem key={skill.id} skill={skill} />)}
   
  </div>
  </div>
  </div>
  </div>
</div>
</div>
     ) 
        )
    }
}

Dashboard.propTypes = {
  info: PropTypes.object.isRequired,
  education: PropTypes.object.isRequired,
  skill: PropTypes.object.isRequired,
  getInfo: PropTypes.func.isRequired,
  getAllEducation: PropTypes.func.isRequired,
  getWorks: PropTypes.func.isRequired,
  getProjects: PropTypes.func.isRequired,
  getSkills: PropTypes.func.isRequired,
  
}

const mapStateToProps = state => ({
  info: state.info,
  education: state.education,
  work: state.work,
  project: state.project,
  skill: state.skill,

})

export default connect(mapStateToProps, { getInfo, getAllEducation, getWorks, getProjects, getSkills})(Dashboard);