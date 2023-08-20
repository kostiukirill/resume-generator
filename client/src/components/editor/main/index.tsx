import React from 'react'
import styles from './index.module.css'
import Hero from './hero'
import MySkills from './skills/index';
import MyProjects from './projects';
import Biography from './experience&biography/biography';
import Experience from './experience&biography/experience';
import Blog from './blog';
import Contacts from './contacts';


const Main = () => {


  const data = {
    name : 'Kirill Kostyu',
    job: 'Frontend - Developer',
    greeting: `Good day, Dear guest!\nGlad to see you in my site-resume.\nYou can find out, what you want to know, about me.\nEvery section of this site contains much info about me!`,
    description: 'I have always been interested in the IT field, I plan to develop towards web development. By programming, I has automated work processes at his current place of work, developed a program for finding and troubleshooting a complex of measuring equipment used to check the technical condition of controlling objects, as well as a program for recording incoming (outgoing) telegrams. I have already mastered the layout and JavaScript well, at the moment I am studying React and the Git version control system.\nIn the near future, I will have to learn Python, Bash, Photoshop, Figma, Agile, jQuery, WordPress, HTTP, SQL and much more.'
  }


  const bioData = {
    nameCity: 'Murmansk',
    birthDay: new Date('1996-01-21'),
    nameCollege: 'Black Sea Higher Naval School named after P.S. Nakhimov ',
    yearStop: '2018',
    courses: [
      {   
          nameSchool: 'Skillbox',
          profession: 'Fullstack-developer',
          stack: null,
          start: new Date('2022-08-20'),
          stop: new Date('2023-08-20'),
          createdAt: new Date(),
          updatedAt: new Date(),
          adminId: 'q3r5wefvfdrer3q',
      },
      {
          nameSchool: 'Self study',
          profession: null,
          stack: 'Three.js, , Electron.js',
          start: new Date('2023-08-20'),
          stop: null,
      },
  ],
}

const myExp = [
  {
    dateStart: new Date(),
    dateStop: new Date(),
    nameCompany: 'Skillbox',
    position: 'Frontend-developer',
    responsibilities: 'development of user interface logic (usually in JavaScript)\ncreation of website architecture page\nlayout in HTML and CSS\nsetting up website functionality: buttons, pop-up elements, animations\ncode optimization and expansion\nsearch for solutions to improve the effectiveness of a website or \napplication communication with a backend developer and designer',
  },
  {
    dateStart: new Date(),
    dateStop: new Date(),
    nameCompany: 'Skillbox',
    position: 'Frontend-developer',
    responsibilities: 'development of user interface logic (usually in JavaScript)\ncreation of website architecture page\nlayout in HTML and CSS\nsetting up website functionality: buttons, pop-up elements, animations\ncode optimization and expansion\nsearch for solutions to improve the effectiveness of a website or \napplication communication with a backend developer and designer',
  },
]

const blogPosts = [
  {
    descr: 'Bought textbook by Robert Martin "Clean code". Began readin\' it and knew, book contents examples, which has been written on Java, but I learn python & JS. I don\'t understand, what does that mean. Damn! May be, anybody will advise textbook of clean coding, that  contents examples on JS?',
    mediaLink: "http://kostiuresph.webtm.ru/photos/cleancodebook.jpg",
    createdAt: new Date(),
  },
  {
    descr: 'Began to learn Express.js. I wanna acquire a skill of dynamic web layout. ',
    mediaLink: null,
    createdAt: new Date(),
  },
  {
    descr: 'Began to learn Express.js. I wanna acquire a skill of dynamic web layout. ',
    mediaLink: null,
    createdAt: new Date(),
  },
  {
    descr: 'Began to learn Express.js. I wanna acquire a skill of dynamic web layout. ',
    mediaLink: null,
    createdAt: new Date(),
  },
  {
    descr: 'Began to learn Express.js. I wanna acquire a skill of dynamic web layout. ',
    mediaLink: null,
    createdAt: new Date(),
  },
  {
    descr: 'Began to learn Express.js. I wanna acquire a skill of dynamic web layout. ',
    mediaLink: null,
    createdAt: new Date(),
  },
  {
    descr: 'Began to learn Express.js. I wanna acquire a skill of dynamic web layout. ',
    mediaLink: null,
    createdAt: new Date(),
  },
  {
    descr: 'Began to learn Express.js. I wanna acquire a skill of dynamic web layout. ',
    mediaLink: null,
    createdAt: new Date(),
  },
  {
    descr: 'Began to learn Express.js. I wanna acquire a skill of dynamic web layout. ',
    mediaLink: null,
    createdAt: new Date(),
  },
  {
    descr: 'Began to learn Express.js. I wanna acquire a skill of dynamic web layout. ',
    mediaLink: null,
    createdAt: new Date(),
  },
  {
    descr: 'Began to learn Express.js. I wanna acquire a skill of dynamic web layout. ',
    mediaLink: null,
    createdAt: new Date(),
  },
]

const contacts = [
  {
    nameContact: 'Phone',
    linkContact: '+79211606928',
  },
  {
    nameContact: 'email',
    linkContact: 'kostiu.kirill@yandex.ru',
  },
  {
    nameContact: 'telegram',
    linkContact: '@kostyukir',
  },
  {
    nameContact: 'gitHub',
    linkContact: 'https://github.com/kostiukirill',
  },
  {
    nameContact: 'Habr Career',
    linkContact: 'https://career.habr.com/kirillkostyu1',
  },
  {
    nameContact: 'linkedIn',
    linkContact: 'https://www.linkedin.com/in/кирилл-костю-33953027b/',
  },
]

  
  return (
    <main className={styles.main}>
      <Hero name ={data.name} job={data.job} greeting={data.greeting} description={data.description} mail={contacts[1].linkContact} />
      <MySkills/>
      <MyProjects/>
      <div className={styles.experience_and_bio_section}>
        <Experience myExp={myExp}/>
        <Biography bioData={bioData}/>
      </div>
        <Blog data={blogPosts} />
        <Contacts contacts={contacts}/>
    </main>
  )
}

export default Main