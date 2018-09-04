import React from 'react'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import transferToken from '../../assets/images/transfer-token.svg'
import Modal from '../Modal'
import TokenSaleOwnerAddress from '../steps/TokenSaleOwnerAddress'
import TokenSaleTransferAmount from '../steps/TokenSaleTransferAmount'
import WalletSelection from '../steps/WalletSelection'

class TransferTokens extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: true
    }
  }
  toggleVisibility = () => {
    const { history, tokenId } = this.props
    // this.setState({ visible: !this.state.visible })
    history.push(`/token/details/${tokenId}`)
  }
  render () {
    const { t } = this.props
    const { visible } = this.state
    return (
      <Modal icon={transferToken} visible={visible} title={t('Transfer Tokens')} toggleVisibility={this.toggleVisibility}>
        <TokenSaleOwnerAddress />
        <div className='separator' />
        <TokenSaleTransferAmount />
        <div className='separator' />
        <WalletSelection />
      </Modal>
    )
  }
}
export default withRouter(translate('translations')(connect(s => s)(TransferTokens)))
