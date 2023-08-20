import React from 'react'
import styles from './index.module.css'

interface MyContactProps {
    nameContact: String;
    linkContact: String;
}

const Contact = (props: MyContactProps) => {
    let typeLink;
    switch (props.nameContact) {
        case 'Phone':
            typeLink = 'tel:'
            break;
        case 'email':
            typeLink = 'mailto:'
            break;
        default:
            typeLink = ''
            break;
    }
  return (
    <div className={styles.contact}>
        <p className={styles.contact_name}>
            {props.nameContact}
        </p>
        <a className={styles.contact_link} href={`${typeLink}${props.linkContact}`} target={!typeLink? `_blanc` : ''}>
            {props.linkContact}
        </a>
    </div>
  )
}

export default Contact