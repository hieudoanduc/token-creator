import React from 'react'

const TokenType = ({ nextFunction }) => {
  return (
    <div>
      <div>Insert the total supply of your token:</div>
      <form>
        Startable Burnable <input type='radio' name='tokenType' value='Startable Burnable' />
        Startable <input type='radio' name='tokenType' value='Startable' />
        Simple <input type='radio' name='tokenType' value='Simple' />
      </form>
      { nextFunction ? <button onClick={nextFunction} >Next</button> : null }
    </div>
  )
}

export default TokenType
