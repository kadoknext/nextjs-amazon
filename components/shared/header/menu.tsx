import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/signin' className='flex items-center cursor-pointer p-1 border border-transparent hover:border-white rounded-[2px]'>
          Hello, Sign In
        </Link>

      

        <Link href='/cart' className='hcursor-pointer p-1 border border-transparent hover:border-white rounded-[2px]'>
        <div className="flex items-end">
          <ShoppingCartIcon className='w-8 h-8' />
          Cart
          </div>
        </Link>
      </nav>
    </div>
  )
}
