export default async function Page() {
  return (
    <div className='font-bold text-2xl text-center lg:text-3xl p-10'>
      <h1>Home Page content</h1>
      <div className='mt-10'>
        <a
          className='bg-gray-50 p-2 rounded-md px-4 border-2 text-blue-500 hover:underline'
          href='https://www.youtube.com/watch?v=WLHCPwqHzzQ'
          target='_blank'
          rel='noopener noreferrer'
        >
          Video: 37:00 min
        </a>
      </div>
      
    </div>
  )
}
