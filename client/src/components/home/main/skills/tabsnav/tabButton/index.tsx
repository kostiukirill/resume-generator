import React, { MouseEventHandler } from 'react'
// import styles from './index.module.css';

interface TabButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    className: Object;
    value: String;
}

const TabButton = (props: TabButtonProps) => {

  return (
    <button onClick={props.onClick} className={`${props.className}`} value={`${props.value}`}>
        {props.value}
    </button>
  )
}

export default TabButton