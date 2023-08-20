import React, { useState, useRef } from 'react';
import styles from './index.module.css';
import { LogAdminData, useLoginMutation } from '../../app/services/auth';
import { isErrorWithMessage } from '../utils/is-error-with-message';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [ loginAdmin, loginAdminResult] = useLoginMutation();

    const [error, setError] = useState('')


    const login = async (event: any) => {
        event.preventDefault();
        try {

            const data: LogAdminData = {
                email: emailRef.current ? emailRef.current.value : '',
                password: passwordRef.current ? passwordRef.current.value : '',
            }
            
            await loginAdmin(data).unwrap()
            navigate('/admin/editor')                   // <-.-.-.-.-.-.-.-.- link to editor should be here -.-.-.-.-.-.-.-.-
        } catch (error) {
            const isError = isErrorWithMessage(error);

            if (isError) {
                setError(error.data.message)
            } else {
                setError('Unknown error')
            }
        }
    }

  return (
    <div className={styles.login_container}>
        <video className={styles.background_video} autoPlay loop muted>
            <source src="http://kostiuresph.webtm.ru/videos/background.mp4" type='video/mp4' />
        </video>
        <div className={styles.form_div}>
            <h2 className={styles.form_title}>
                LOGIN
            </h2>
            <form className={styles.form} onSubmit={ login }>
                <input className={styles.form_input} type="email" placeholder='E-MAIL' ref={emailRef}/>
                <input className={styles.form_input} type="password"  placeholder='PASSWORD' ref={passwordRef}/>
                <button className={styles.form_submit}>
                    SUBMIT
                </button>
            </form>
            <div className={styles.lets_reg_div}>
                <p className={styles.preview_register}>
                    Haven't account? Let's
                </p>
                <a href="/register" className={styles.register_link}>
                    Register
                </a>
            </div>
        </div>
    </div>
  )
}

export default Login