import React from 'react';
import Card from './Card/Card'
import Macbook_Pro from '../../images/Macbook Pro.svg'
import Boards_Notifications from '../../images/Boards Notifications1.png'

import styles from './Contents.module.scss';

function Contents() {

  return (
    <section className={styles.contents} aria-label='Contents'>
      <h2 className={`headline ${styles.headline}`}>Contents</h2>
      <p className={`${styles.sub} sub`}> We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <ul className={`${styles.cards} list`}>
        <li>
          <Card
            headline='Work'
            sub="Ever wondered if you're too reliant on a client for work? Slate helps you identify ."
            button_text='Sign Up'
            img={Macbook_Pro}
            gap={57}
          />
        </li>
        <li>
          <Card
            headline='Design with real data'
            sub="Ever wondered if you're too reliant on a client for work? Slate helps you identify ."
            button_text='Try For Free'
            img={Boards_Notifications}
            gap={30}
          />
        </li>
      </ul>
    </section >
  )
}

export default Contents;