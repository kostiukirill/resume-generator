import React from 'react'
import styles from './index.module.css'

interface ProjectProps {
    projectName: String;
    projectLink:  String;
    screenLink: String;
}

const Project = (props: ProjectProps) => {
  return (
    <div className={styles.project}>
        <a target='_blank' href={`${props.projectLink}`} className={styles.project_link}>
            <img  className={styles.project_screen} src={`${props.screenLink}`} alt={`Screenshot ${props.projectName} project's main landing`}/>
            <div className={styles.project_name}>
                {props.projectName}
            </div>
        </a>
    </div>
  )
}

export default Project