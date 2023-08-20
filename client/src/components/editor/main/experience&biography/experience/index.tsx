import React, {useState, useEffect} from 'react'
import styles from './index.module.css'

interface MyExperienceProps {
  myExp: {
  dateStart:Date;
  dateStop:Date;
  nameCompany:String;
  position:String;
  responsibilities:String;
}[]
}

const Experience = (props: MyExperienceProps) => {

  const expArr: Array<React.ReactElement> = [];

  // eslint-disable-next-line array-callback-return
  props.myExp.map(exp => {
    expArr.push(
    <div className={styles.myExp_block}>
      <h4 className={styles.myExp_subtitle}>
        {`${exp.dateStart.getFullYear()} - ${exp.dateStop.getFullYear()} "${exp.nameCompany}"`}
      </h4>
      <p className={styles.myExp_desc}>
        {exp.position}
      </p>
      <h4 className={styles.myExp_subtitle}>
        RESPONSIBILITIES
      </h4>
      <p className={styles.myExp_desc}>
        {exp.responsibilities}
      </p>
      </div>
    )
  })

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
  return (
    <div style={scrollY >= 3340 ? {transform: `translateX(-${(scrollY-3340)*2}px)`} : {transform: `none`}} id='myExperience' className={styles.myExp}>
      <h2 className={styles.myExp_title}>
        MY EXPERIENCE
      </h2>
      {expArr}
    </div>
  )
}

export default Experience