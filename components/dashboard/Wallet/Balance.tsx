import React from 'react'

export default async function Balance() {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='flex flex-col gap-4 items-center justify-center'>
            <h5 className='text-base font-bold text-white'>موجودی کیف پول شما</h5>
            <div className='bg-background px-6 py-2 text-center text-primary-500 font-bold text-base rounded-lg'>
            ۱۲۰,۰۰۰ تومان
            </div>
        </div>
    </div>
  )
}
