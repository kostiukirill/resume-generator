import React from 'react'
import styles from './index.module.css'
const MailForm = () => {
  return (
    <form className={styles.form} action="">
        <input className={`${styles.input} ${styles.input_company}`} placeholder='COMPANY' type="text" />
        <input className={`${styles.input} ${styles.input_person}`} placeholder='NAME' type="text" />
        <input className={`${styles.input} ${styles.input_person}`} placeholder='SURNAME' type="text" />
        <input className={`${styles.input} ${styles.input_person}`} placeholder='E-MAIL' type="email" />
        <input className={`${styles.input} ${styles.input_person}`} placeholder='TEL' type="tel" />
        <input className={`${styles.input} ${styles.input_message}`} placeholder='MESSAGE' type="text" />
        <button className={styles.form_button} type='submit'>
            SUBMIT
        </button>
    </form>
  )
}

export default MailForm