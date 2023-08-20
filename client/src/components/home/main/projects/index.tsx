import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
import Project from './project';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './index.module.css'



const projects = [
  {
    "uniqueId": "da9c8dd7-4eb1-4e30-a9fe-5586ffd28c6d",
    "projectName": "Game: \"Couples\"",
    "projectLink": "https://github.com/kostiukirill/Game-Couples-",
    "screenLink": "http://kostiuresph.webtm.ru/photos/Couples.jpg",
    "createdAt": "2023-06-01T15:23:13.408Z",
    "updatedAt": null,
    "adminId": "e36cab57-0076-4d3b-92e7-df3d885ccae6"
},
{
    "uniqueId": "ce25f47c-78af-4a7e-9f1f-174dc7caea2c",
    "projectName": "Base of students",
    "projectLink": "https://github.com/kostiukirill/Base-of-students",
    "screenLink": "http://kostiuresph.webtm.ru/photos/StudentBase.jpg",
    "createdAt": "2023-06-01T15:23:13.408Z",
    "updatedAt": null,
    "adminId": "e36cab57-0076-4d3b-92e7-df3d885ccae6"
},
{
    "uniqueId": "11e246f5-3741-4722-bbd3-ad89c007e5e5",
    "projectName": "Application \"TODO\"",
    "projectLink": "https://github.com/kostiukirill/Application-ToDo",
    "screenLink": "http://kostiuresph.webtm.ru/photos/Todo.png",
    "createdAt": "2023-06-01T15:23:13.408Z",
    "updatedAt": null,
    "adminId": "e36cab57-0076-4d3b-92e7-df3d885ccae6"
},
{
    "uniqueId": "b2ef3a9c-d77a-4bc9-8583-38cb7ec8b9d5",
    "projectName": "Landing-page \"Evclid\"",
    "projectLink": "https://github.com/kostiukirill/Evclid-landing-page",
    "screenLink": "http://kostiuresph.webtm.ru/photos/Evclid.jpg",
    "createdAt": "2023-06-01T15:23:13.408Z",
    "updatedAt": null,
    "adminId": "e36cab57-0076-4d3b-92e7-df3d885ccae6"
},
{
    "uniqueId": "5113acca-294d-4888-a279-0b5deca6ccb8",
    "projectName": "Landing-page \"Lagoona\"",
    "projectLink": "https://github.com/kostiukirill/Lagoona-landing-page",
    "screenLink": "http://kostiuresph.webtm.ru/photos/Lagoona.jpg",
    "createdAt": "2023-06-01T15:23:13.408Z",
    "updatedAt": null,
    "adminId": "e36cab57-0076-4d3b-92e7-df3d885ccae6"
}
]

const MyProjects = () => {

  const projectsSlides: Array<React.ReactNode> = [];

  for (let i = 0; i < projects.length; i++) {

    projectsSlides.push(
      <SwiperSlide key={projects[i].projectName} virtualIndex={i}>
        <Project projectName={projects[i].projectName} projectLink={projects[i].projectLink} screenLink={projects[i].screenLink}/>
      </SwiperSlide>
    )
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
    <section id='myProjects' className={styles.myProjects}>
      <div className={styles.myProjects_container}>
        <h2 className={styles.myProjects_title}>My Projects</h2>
        <Swiper
           modules={[Navigation]}
           spaceBetween={20}
           slidesPerView={4}
           navigation
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
           className={styles.swiper_wrapper}
        >
        {projectsSlides}
    </Swiper>
      </div>
    </section>
  )
}

export default MyProjects