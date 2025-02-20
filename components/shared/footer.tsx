'use client'

import { ChevronUp, Link } from 'lucide-react'
import { Button } from '../ui/button'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='bg-black text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
        <div className='p-4'>
          <div className='flex justify-center gap-3 texr-sm'>
            <Link href='/page/conditions-of-use'>Conditions of Use</Link>
            <Link href='/page/privacy-policy'>Privacy Notices</Link>
            <Link href='/page/help'>Help</Link>
          </div>
          <div className='lex justify-center text-sm'>
            <p>© 2015 - 2025 {APP_NAME}, Inc. or its affiliates</p>
          </div>

          <div className='mt-8 flex justify-center text-sm text-gray-400'>
            Rua Carneiro da Cunha, 517 ap.72 - Saúde -São Paulo - SP
            CEP:04144-000
          </div>
        </div>
      </div>
    </footer>
  )
}
