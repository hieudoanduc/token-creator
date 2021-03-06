import React, { Component } from 'react'
import { translate } from 'react-i18next'
import './Header.css'
import logo from '../assets/images/logo.svg'
import Menu from './Menu'

class Header extends Component {
  render () {
    const { t } = this.props
    return (
      <header className='pure-u-1 d-flex flex-row flex-h-between flex-v-center'>
        <div className='left d-flex flex-row flex-v-end'>
          <a href='/'><img src={logo} alt='logo' className='logo' /></a>
          <a href='/' className='title'>{t('Token Creator')}</a>
        </div>
        <Menu />
      </header>
    )
  }
}

export default translate('translations')(Header)
