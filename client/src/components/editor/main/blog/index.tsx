import React from 'react'
import Post from './post'
import styles from './index.module.css'

interface MyBlogProps {
    data: {
        descr:String;
        mediaLink: String | null;
        createdAt: Date;
    }[]
}


const Blog = (props: MyBlogProps) => {

    const posts: Array<React.ReactElement> = [];

    props.data.map(data => {
        posts.push(
            <Post descr={data.descr} createdAt={data.createdAt} mediaLink={data.mediaLink} />
        )
    })
  return (
    <div className={styles.myBlog}>
        <h2 className={styles.myBlog_title}>
            MY BLOG
        </h2>
        <div className={styles.myBlog_posts}>
        {posts}
        </div>
    </div>
  )
}

export default Blog