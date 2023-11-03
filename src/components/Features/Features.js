import React from 'react';
import './Features.scss';
import Frame_19 from '../../images/Frame 19.png'
import feature_icon_1 from '../../feature_icon_1.png'
import feature_icon_2 from '../../feature_icon_2.png'
import feature_icon_3 from '../../feature_icon_3.png'

function Features() {

  return (
    <section className='features' aria-label='Project features'>
      <h2 className='features__headline'>FEATURES</h2>
      <p className='features__sub'>Most calendars are designed for teams.
        Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      <img className='features__pic' src={Frame_19} alt='Сhat app screenshot' />
      <ul className='features__container'>
        <li className='feature'>
          <h3 className='feature__headline'>
            <img className='feature__icon' src={feature_icon_1} alt='spoon and knife picture' />
            A single source of truth
          </h3>
          <p img className='feature__sub'>
            When you add work to your Slate calendar we automatically calculate useful insights
          </p>
        </li>
        <li className='feature'>
          <h3 className='feature__headline'>
            <img className='feature__icon' src={feature_icon_2} alt='alien picture' />
            Intuitive interface
          </h3>
          <p img className='feature__sub'>
            When you add work to your Slate calendar we automatically calculate useful insights
          </p>
        </li>
        <li className='feature'>
          <h3 className='feature__headline'>
            <img className='feature__icon' src={feature_icon_3} alt='infinity picture' />
            Or with rules
          </h3>
          <p img className='feature__sub'>
            When you add work to your Slate calendar we automatically calculate useful insights
          </p>
        </li>
      </ul>
    </section >
  )
}

export default Features;