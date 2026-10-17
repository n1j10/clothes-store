import { cn } from '@/lib/utils'
import React from 'react'

type EmptyListProps = {
  title: string,
  className?: string
}

function EmptyList({ title, className }: EmptyListProps) {
  return (
    <div className={cn('py-24 text-center border-y', className)}>
      <h2 className='text-3xl italic'>{title}</h2>
    </div>
  )
}

export default EmptyList
