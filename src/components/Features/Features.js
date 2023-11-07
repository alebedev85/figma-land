import React from 'react';
import './Features.scss';
import Frame_19 from '../../images/Frame 19.svg'
import feature_icon_1 from '../../images/feature_icon_1.svg'
import feature_icon_2 from '../../images/feature_icon_2.svg'
import feature_icon_3 from '../../images/feature_icon_3.svg'

function Features() {

  return (
    <section className='features' aria-label='Project features'>
      <h2 className='features__headline headline'>FEATURES</h2>
      <p className='features__sub sub'>Most calendars are designed for teams.
        Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      <img className='features__pic' src={Frame_19} alt='Сhat app screenshot' />
      <ul className='features__container'>
        <li className='feature'>
          <img className='feature__icon_1 feature__icon' src={feature_icon_1} alt='spoon and knife' />
          <h3 className='feature__headline'>
            A single source of truth
          </h3>
          <p img className='feature__sub'>
            When you add work to your Slate calendar we automatically calculate useful insights
          </p>
        </li>
        <li className='feature'>
          <img className='feature__icon feature__icon_2' src={feature_icon_2} alt='alien' />
          <h3 className='feature__headline feature__headline_intuitive'>
            Intuitive interface
          </h3>
          <p img className='feature__sub'>
            When you add work to your Slate calendar we automatically calculate useful insights
          </p>
        </li>
        <li className='feature feature_up'>
          <img className='feature__icon feature__icon_3' src={feature_icon_3} alt='infinity' />
          <h3 className='feature__headline feature__headline_rules'>
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