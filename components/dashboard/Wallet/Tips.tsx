import { walletTips } from '@/constants'
import React from 'react'

export default function Tips() {
  return (
    <div className='bg-background flex flex-col gap-4 py-3 px-2 items-start justify-start rounded-lg'>
        <h6 className='font-bold text-base text-primary-500'>نکته‌های مهم</h6>
        <ul className='space-y-4 list-disc list-inside'>
            {walletTips.map((tip, i)=><li key={i} className='text-sm font-normal'>{tip}</li>)}
        </ul>
    </div>
  )
}
