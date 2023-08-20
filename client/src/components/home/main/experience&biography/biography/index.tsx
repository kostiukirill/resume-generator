import React, {useEffect, useState} from 'react'
import getFullDate from '../../../../utils/getFullDate';
import styles from './index.module.css'

interface MyBioProps {
    bioData: {
    nameCity: String;
    birthDay: Date;
    nameCollege: String;
    yearStop: String;
    courses: 
      {   
          nameSchool: String;
          profession: String | null;
          stack: String | null,
          start: Date,
          stop: Date | null,
      }[],
    }
}


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]


const Biography = (props: MyBioProps) => {

    const arrCourses: Array<React.ReactElement> = []

    // eslint-disable-next-line array-callback-return
    props.bioData.courses.map(course => {
        arrCourses.push(
            <div className={styles.course_block}>
                <p className={styles.course_block_title}>
                    {course.nameSchool},
                </p>
                <p className={styles.course_block_title}>
                    {course.profession? 'PROFESSION:' : null}
                </p>
                <p className={styles.bio_block_descr}>
                    {course.profession}
                </p>
                <p className={styles.course_block_title}>
                    {course.stack? 'STACK:' : null}
                </p>
                <p className={styles.bio_block_descr}>
                    {course.stack}
                </p>
                <p className={styles.course_block_title}>
                    DURATION OF TRAINING:
                </p>
                <p className={styles.bio_block_descr}>
                    {`${months[course.start.getMonth()]} ${course.start.getFullYear()} - ${course.stop? months[course.stop.getMonth()] : 'until'} ${course.stop ? course.stop.getFullYear() : 'now'}`}
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
    <div style={scrollY >= 3340 ? {transform: `translateX(${(scrollY-3340)*2}px)`} : {transform: `none`}} id='myBiography' className={styles.bio_block}>
        <h2 className={styles.bio_title}>
            MY BIOGRAPHY
        </h2>
        <div className={styles.bio_block_div}>
            <h3 className={styles.bio_block_title}>
                CITY
            </h3>
            <p className={styles.bio_block_descr}>
                {props.bioData.nameCity}
            </p>
        </div>
        <div className={styles.bio_block_div}>
            <h3 className={styles.bio_block_title}>
                BIRTHDAY
            </h3>
            <p className={styles.bio_block_descr}>
            {getFullDate(props.bioData.birthDay, false, months)}
            </p>
        </div>
        <div className={styles.bio_block_div}>
            <h3 className={styles.bio_block_title}>
                EDUCATION
            </h3>
            <p className={styles.bio_block_descr}>
                {props.bioData.nameCollege}
            </p>
            <p className={styles.bio_block_descr}>
                {props.bioData.yearStop}
            </p>
        </div>
        <div className={styles.bio_block_div}>
            <h3 className={styles.bio_block_title}>
                COURSES & TRAININGS
            </h3>
            {arrCourses}
        </div>
       

    </div>
  )
}

export default Biography