import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setName } from '../../redux/addToken'
import icon from '../../assets/images/token-name.svg'
import './Step.css'
import './StepSingleInput.css'
import { translate } from 'react-i18next'
import StepHeader from './parts/StepHeader'

class TokenName extends Component {
  constructor (props) {
    super(props)

    this.state = {
      valid: false
    }
  }
  onChangeText = (e) => {
    const value = e.target.value

    const { dispatch } = this.props
    dispatch(setName(value))
    this.setState({
      valid: this.validate(value)
    })
  }

  validate = (input) => {
    const { setValid } = this.props
    const valid = input.length > 0

    if (setValid) {
      setValid(valid)
    }
    return valid
  }
  componentWillMount () {
    const { addToken } = this.props
    this.setState({ valid: this.validate(addToken.name) })
  }

  render () {
    const { addToken, nextFunction, t } = this.props
    const { valid } = this.state

    return (
      <div className={`step ${nextFunction ? 'alone' : ''} pure-u-1 d-flex flex-column flex-h-between`}>
        <StepHeader
          icon={icon}
          title={t(`Name`)}
        >
          {t(`Choose a unique name that represents your project, e.g. “Ethereum”, “Bitcoin”.`)}
        </StepHeader>
        <form className='bottom d-flex flex-row flex-h-between'>
          <div className={`input-box ${nextFunction ? 'pure-u-16-24' : 'pure-u-1'} d-flex flex-column flex-v-center`}>
            <input placeholder={t(`Insert name`)} className='token-name text shadow pure-u-1' value={addToken.name} onChange={this.onChangeText} />
          </div>
          {nextFunction ? <button className='next shadow pure-u-7-24' disabled={!valid} onClick={nextFunction} >
          Next
          </button> : null}
        </form>
      </div>
    )
  }
}

export default translate('translations')(connect(s => s)(TokenName))
