import React from 'react'
import styles from './index.module.css'
import Contact from './contact';
import MailForm from './form';

interface MyContactsProps {
    contacts:{
    nameContact: String;
    linkContact: String;
    }[]

}

const Contacts = (props: MyContactsProps) => {
    const contactsArr: Array<React.ReactElement> = [];

    // eslint-disable-next-line array-callback-return
    props.contacts.map(contact => {
        contactsArr.push(
            <Contact nameContact={contact.nameContact} linkContact={contact.linkContact}/>
        )
    })
  return (
    <div className={styles.contacts}>
        <h2 className={styles.contacts_title}>
            MY CONTACTS
        </h2>
        <div className={styles.contacts_flexcont}>
            <div className={styles.contacts_left}>
                {contactsArr}
            </div>
            <MailForm />
        </div>
    </div>
  )
}

export default Contacts