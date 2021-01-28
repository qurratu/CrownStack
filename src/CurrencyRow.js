import React from 'react'

export default function CurrencyRow(props) {
 
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      {
  console.log('currencyOptions',currencyOptions)}
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          
          <option key={option.id} value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  )
}
