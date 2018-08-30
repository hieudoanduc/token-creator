import React, { Component } from 'react'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'

import Loading from './Loading'
import WalletSelection from './steps/WalletSelection'
import { saveTransaction, saveReceipt } from '../redux/mainTokenSales'
import { setState } from '../redux/addMainTokenSale'

import prepareSetAuthorized from '../utils/prepareSetAuthorizedTransaction'

class MainTokenSaleAuthorize extends Component {
  constructor (props) {
    super(props)
    this.state = {
      transaction: null,
      loading: false
    }
  }

  async componentDidMount () {
    const { web3, tokenId, tokens, mainTokenSales } = this.props
    const transactionHash = tokens.receipts[tokenId].transactionHash
    const tokenType = tokens.transactions[transactionHash].type
    const mainTokenSaleAddress = mainTokenSales[tokenId].receipt.contractAddress
    const transaction = await prepareSetAuthorized({web3, tokenType, tokenAddress: tokenId, mainTokenSaleAddress})
    this.setState({
      transaction,
      loading: false
    })
  }

  onTransactionHash = (transactionHash) => {
    const { dispatch, web3, tokenId } = this.props
    console.log('OTH:', web3.address, tokenId)
    dispatch(setState('authorized'))
    dispatch(saveTransaction(tokenId, transactionHash, { userAddress: web3.address, tokenAddress: tokenId }))
  }

  onReceipt = (receipt) => {
    const { dispatch, tokenId } = this.props
    dispatch(saveReceipt(tokenId, receipt))
  }

  render () {
    const {transaction, loading} = this.state

    if (loading) {
      return <Loading />
    }

    return (
      <div>
        <div>MainTokenSaleAuthorize</div>
        <WalletSelection connectorName='mainTokenSaleAuthorize' transaction={transaction} onTransactionHash={this.onTransactionHash} onReceipt={this.onReceipt} />
      </div>
    )
  }
}

export default translate('translations')(connect(s => s)(MainTokenSaleAuthorize))
