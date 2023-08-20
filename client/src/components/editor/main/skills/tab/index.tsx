import React, {useEffect, useState} from 'react'
import styles from './index.module.css'

interface TabProps {
    skills: String[];
    nameSkill: String;
}


const Tab = (props: TabProps) => {
  let [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollY = window.scrollY;
      setScrollY(scrollY)
      console.log(scrollY)
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
  }, []);
    const divsArr = []
    for(let i = 0; i < props.skills.length; i++) {
        divsArr.push(
        <li className={styles.skills_list__item}>{props.skills[i]}</li>
        )
    }
  return (
    <div style={scrollY >= 1350? {transform: `translateX(${(scrollY-1350)*2}px)`} : {transform: `none`}} className={styles.tab}>
        <h3 className={styles.tab_title}>{props.nameSkill}</h3>
        <ul className={styles.skills_list}>{divsArr}</ul>
    </div>
  )
}

export default Tab