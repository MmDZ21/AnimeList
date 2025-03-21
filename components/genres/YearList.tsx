import { yearsList } from '@/constants'
import Link from 'next/link'
import React from 'react'

export default function YearList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-5">
    {yearsList.map((year) => (
      <Link href={`/anime/year/${year}`} key={year}>
        <div className='bg-[#17212B] w-full py-2 font-semibold rounded-lg text-center'>
            {year}
        </div>
      </Link>
    ))}
  </div>
  )
}
