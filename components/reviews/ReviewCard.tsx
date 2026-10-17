import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'
import Rating from './Rating'
import { LuUser } from 'react-icons/lu'


type ReviewInfoProps = {
  reviewInfo: {
    name: string,
    image?: string | null,
    rating: number,
    comment: string,
  },
  children?: React.ReactNode
}

function ReviewCard({ reviewInfo, children }: ReviewInfoProps) {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-4'>
          {reviewInfo.image ? (
            <Image
              src={reviewInfo.image}
              alt={reviewInfo.name}
              width={50}
              height={50}
              className='w-12 h-12 rounded-full object-cover capitalize mb-1'
            />
          ) : (
            <LuUser className='w-12 h-12 p-2 bg-blue-500 rounded-full text-white mb-1' />
          )}
          <div className=''>
            <h3 className='text-sm font-bold capitalize mb-1'>

              {reviewInfo.name}
            </h3>
            <Rating rating={reviewInfo.rating}/>
          </div>
        </div>

      </CardHeader>
      <CardContent>
        {/* add review comment  */}
        {reviewInfo.comment}

      </CardContent>
      <div>
        {children}
      </div>
    </Card>

  )
}

export default ReviewCard