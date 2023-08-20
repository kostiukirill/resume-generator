// import React, { ReactNode, useRef } from 'react'
import React, { useState } from 'react';
import styles from './index.module.css'
const {useEffect} = React;

interface HeroProps {
    name: String, 
    job: String, 
    greeting: String, 
    description: String,
    mail: String
}

const Hero = ({name, job, greeting, description, mail}: HeroProps) => {

  const [valueName, setvalueName] = useState(name)
  const [valueJob, setValueJob] = useState(job)
  const [valueGreeting, setValueGreeting] = useState(greeting)
  const [valueDescription, setValueDescription] = useState(description)

  let [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollY = window.scrollY;
      setScrollY(scrollY)
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
  }, []);

  const editValue = (event: any, fn:Function) => {
    fn(event.target.value)
  }

  return (
    <section id='aboutMe' className= {styles.hero}>
      
        <form className= { styles.hero_name_form }>
          <input onChange={event => setvalueName(event.target.value) } className= { styles.hero_name_input } value={`${valueName}`} />
          <input onChange={event => setValueJob(event.target.value) } className= { styles.hero_job_input } value={`${valueJob}`}/>
          <textarea onChange={event => setValueGreeting(event.target.value) } cols={70} rows={5} className= { styles.hero_greeting_input } value={`${valueGreeting}`}/>
          <textarea onChange={event => setValueDescription(event.target.value) } cols={70} rows={10} className= { styles.hero_description_input } value={`${valueDescription}`}/>
        </form>

        <a href={`mailto: ${mail}`} className={scrollY >= 100? `${styles.button_call__fixed}` : `${styles.button_call}`}>
          <span>MAIL ME</span>
          <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.44446 7.15576L25 21.578L44.5556 7.15576" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M42.1111 3H7.88889C5.18883 3 3 5.18883 3 7.88889V32.3333C3 35.0334 5.18883 37.2222 7.88889 37.2222H42.1111C44.8112 37.2222 47 35.0334 47 32.3333V7.88889C47 5.18883 44.8112 3 42.1111 3Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </a>
    </section>
  )
}

export default Hero