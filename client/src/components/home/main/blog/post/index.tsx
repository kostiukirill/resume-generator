import React from 'react'
import styles from './index.module.css'
import getFullDate from '../../../../utils/getFullDate';

interface MyPostProps {
    descr:String;
    mediaLink: String | null;
    createdAt: Date; 
}
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]

const Post = (props: MyPostProps) => {
    const img = props.mediaLink? <img className={styles.post_img} src={`${props.mediaLink}`} alt="Post's media file" /> : null;
  return (
    <div className={styles.post}>
        <time className={styles.post_time} dateTime={`${props.createdAt}`}>
            {getFullDate(props.createdAt, true, months)}
        </time>
        <div className={styles.post_content}>
            <p className={styles.post_descr}>
                {props.descr}
            </p>
                {img}
        </div>
    </div>
  )
}

export default Post