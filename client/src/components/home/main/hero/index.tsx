// import React, { ReactNode, useRef } from 'react'
import React, { useState } from 'react';
import styles from './index.module.css'
const {useEffect} = React;

interface HeroProps {
    name: String, 
    job: String, 
    greeting: String, 
    description: String
}

const Hero = ({name, job, greeting, description}: HeroProps) => {

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

  return (
    <section id='aboutMe' className= {styles.hero}>
        <h1 style={scrollY >= 200 ? {transform: `translateX(-${scrollY - 200}px)`} : {transform: `none`}} className= { styles.hero_name } > { name } </h1>
        <div style={scrollY >= 200 ? {transform: `translateX(-${(scrollY - 200)*3}px)`} : {transform: `none`}} className= { styles.hero_job } > { job } </div>
        <div style={scrollY >= 200 ? {transform: `translateX(-${(scrollY - 200)*4}px)`} : {transform: `none`}} className= { styles.hero_greeting } > { greeting } </div>
        <div style={scrollY >= 200 ? {transform: `translateX(-${(scrollY - 200)*5}px)`} : {transform: `none`}} className= { styles.hero_description } > { description } </div>
        <a href='tel: +79211606928' className={scrollY >= 100? `${styles.button_call__fixed}` : `${styles.button_call}`}>
          <span>CALL ME</span>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4499 4.79382C15.775 3.10644 14.1407 2 12.3234 2H6.21053C3.88511 2 2 3.88467 2 6.21007C2 25.976 18.024 42 37.79 42C40.1153 42 42 40.1147 42 37.7893L42.0011 31.6756C42.0011 29.858 40.8949 28.2242 39.2076 27.5491L33.3487 25.2064C31.8331 24.6002 30.1073 24.8731 28.8531 25.9182L27.3411 27.1793C25.5753 28.6509 22.9769 28.5338 21.3516 26.9084L17.0938 22.6469C15.4684 21.0213 15.3483 18.4251 16.8199 16.6593L18.0807 15.1473C19.1258 13.8932 19.4011 12.167 18.7949 10.6513L16.4499 4.79382Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
    </section>
  )
}

export default Hero