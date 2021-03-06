import React from 'react'
import './PageNotFound.css'
import { withRouter } from 'react-router-dom'
import planet from '../assets/images/Planet_1.svg'
import rocket from '../assets/images/Rocket.svg'
import planetRing from '../assets/images/Planet_2.svg'
import { translate } from 'react-i18next'

const PageNotFound = ({ history, t }) => {
  return (
    <div id='notFound' className='d-flex flex-h-center pure-u-1'>

      <div className='pure-u-22-24 pure-u-md-18-24 pure-u-sm-20-24'>
        <div className='shadow'>
          <div className='bgContainer d-flex flex-row'>
            <div className='pure-u-1-3 pure-u-md-6-24 d-flex flex-h-center flex-v-end'><img src={planet} /></div>
            <div className='pure-u-1-3 pure-u-md-12-24 pure-u-sm-1 d-flex flex-h-center flex-v-center flex-column'>
              <img className='rocket' src={rocket} />
              <h1>{t('Page not found')}</h1>
            </div>
            <div className='pure-u-1-3 pure-u-md-6-24 d-flex flex-h-center flex-v-start'><img src={planetRing} /></div>

          </div>
        </div>
        <button type='button' onClick={() => history.push('/')}>{t('Home Page')}</button>

      </div>

    </div>
  )
}

export default withRouter(translate('translations')(PageNotFound))
