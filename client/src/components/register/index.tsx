import React from 'react';
import styles from './index.module.css';

const Register = () => {
  return (
    <div className={styles.register_container}>
        <video className={styles.background_video} autoPlay loop muted>
            <source src="http://kostiuresph.webtm.ru/videos/background.mp4" type='video/mp4' />
        </video>
        <div className={styles.form_div}>
            <h2 className={styles.form_title}>
                REGISTER
            </h2>
            <form className={styles.form} action="">
                <input className={styles.form_input} type="text" placeholder='NAME & SURNAME'/>
                <input className={styles.form_input} type="email" placeholder='E-MAIL'/>
                <input className={styles.form_input} type="password"  placeholder='PASSWORD'/>
                <button className={styles.form_submit}>
                    SUBMIT
                </button>
            </form>
            <div className={styles.lets_reg_div}>
                <p className={styles.preview_register}>
                    Have account? Let's
                </p>
                <a href="/login" className={styles.register_link}>
                    Login
                </a>
            </div>
        </div>
    </div>
  )
}

export default Register