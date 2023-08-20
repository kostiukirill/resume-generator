import React, { useState, useEffect } from 'react';
import styles from './index.module.css'
import TabsNav from './tabsnav';
import Tab from './tab';

const mySkill = [
  {
    typeOfSkill: 'Hard',
    focusOfSkill: 'Frontend',
    nameOfSkill: 'HTML'
  },
  {
    typeOfSkill: 'Hard',
    focusOfSkill: 'Backend',
    nameOfSkill: 'NodeJS'
  },
  {
    typeOfSkill: 'Hard',
    focusOfSkill: 'Another skills',
    nameOfSkill: 'HTTP'
  },
  {
    typeOfSkill: 'Soft',
    focusOfSkill: 'Social skills',
    nameOfSkill: 'communicatable'
  },
  {
    typeOfSkill: 'Soft',
    focusOfSkill: 'Foreign languages',
    nameOfSkill: 'English'
  },
  {
    typeOfSkill: 'Soft',
    focusOfSkill: 'Buisness skills',
    nameOfSkill: 'leaderable'
  },
  {
    typeOfSkill: 'Soft',
    focusOfSkill: 'Intellectual skills',
    nameOfSkill: 'mathematics'
  },
]

let focusesAndTypesOfSkillsArr: Object[] = [];

for(let i = 0; i < mySkill.length; i++) {
  focusesAndTypesOfSkillsArr.push({
    typeOfSkill: mySkill[i].typeOfSkill,
    focusOfSkill: mySkill[i].focusOfSkill
  })
}


const MySkills = () => {

  const [value, setValue] = useState('')
  

  const handleChange = (value: any) => {
    setValue(value);
  }

  let changedSkills = [];
  for(let i = 0; i < mySkill.length; i++) {
    if(value === mySkill[i].focusOfSkill) {
      changedSkills.push(mySkill[i].nameOfSkill);
    }
  }

  return (
    <section id='mySkills' className={styles.main_mySkills}>
        <TabsNav nameSkill={value} focusesAndTypesOfSkillsArr={focusesAndTypesOfSkillsArr} onChange = {handleChange}/>
        <Tab skills={changedSkills} nameSkill={value}/>
    </section>
  )
}

export default MySkills