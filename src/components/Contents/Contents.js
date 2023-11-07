import React from 'react';
import './Contents.scss';

function Contents() {

  return (
    <section className='contents' aria-label='Contents'>
      <h2 className='contents__headline headline'>Contents</h2>
      <p className='contents__sub sub'>Most calendars are designed for teams.
      We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <div className='contents__cards'></div>
    </section >
  )
}

export default Contents;