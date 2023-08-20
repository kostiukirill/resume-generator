import React, {useEffect, useState} from 'react'
import styles from './index.module.css'
import TabButton from './tabButton';





interface TabsNavProps {
    onChange: Function;
    focusesAndTypesOfSkillsArr: Object[];
    nameSkill: String;
}



const TabsNav = (props: TabsNavProps) => {

    let TabsNavItemsHard: Array<React.ReactNode>= [];
    let TabsNavItemsSoft: Array<React.ReactNode> = [];
    
    const handleChange = (event: any) => {
        props.onChange(event.target.value);
    }

    const pushElemsToArrays = (arrDb: Object[], arrDest: Array<React.ReactNode>, i: number, indOfValue: number) =>  {
        arrDest.push(
            <TabButton 
            key={i} 
            onClick={handleChange} 
            className={Object.values(arrDb[i])[1] === props.nameSkill ? `${styles.button_tab__active}` : `${styles.button_tag}`} 
            value={`${Object.values(arrDb[i])[1]}`}/>
        )
    }
    for(let i = 0; i < props.focusesAndTypesOfSkillsArr.length; i++) {
        if(Object.values(props.focusesAndTypesOfSkillsArr[i])[0] === 'Hard') {
            pushElemsToArrays(props.focusesAndTypesOfSkillsArr, TabsNavItemsHard, i, 1)
        } else {
            pushElemsToArrays(props.focusesAndTypesOfSkillsArr, TabsNavItemsSoft, i, 1)
        }
    }

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
    <div style={scrollY >= 1350? {transform: `translateX(-${(scrollY-1350)}px)`} : {transform: `none`}} className={styles.main_menu}>
        <h2 className={styles.mySkills_title}>My skills</h2>
        <div className={styles.tab_list}>
            <h4 className={styles.skill_type}>
                HARD
            </h4>
                {TabsNavItemsHard}
        </div>
        <div className={styles.tab_list}>
            <h4 className={styles.skill_type}>
                SOFT
            </h4>
                {TabsNavItemsSoft}
        </div>
    </div>
  )
}

export default TabsNav