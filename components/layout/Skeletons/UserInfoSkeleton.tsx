import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const UserInfoSkeleton = () => {
  return (
        <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-6 lg:justify-start lg:w-full lg:items-end">
          <Skeleton className="size-24 lg:size-40 rounded-lg"/>
          <div className="flex flex-col gap-1 items-center lg:items-start">
            <Skeleton className='h-8 w-32 lg:w-44'/>
            <Skeleton className='h-5 lg:h-6 w-56 lg:w-72'/>
          </div>
        </div>
  )
}

export default UserInfoSkeleton