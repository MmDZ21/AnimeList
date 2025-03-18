import React from 'react'
import Balance from './Balance'
import Tips from './Tips'
import Charge from './Charge'

export default async function Wallet() {
  return (
    <div className='flex flex-col gap-6'>
        <Balance />
        <Tips />
        <Charge />
    </div>
  )
}
