import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { Button } from '../ui/button'

//user -> !auth -> go to sign in

function CardSignBtn() {
  return (
    <Link href='/sign-in'>
      <Button
        variant={'ghost'}
        size={'icon'}
        type='button'
        className='p-2 cursor-pointer'
      >
        <FaHeart className=' text-red-500 hover:cursor-pointer' />
      </Button>
    </Link>

  )
}

export default CardSignBtn
