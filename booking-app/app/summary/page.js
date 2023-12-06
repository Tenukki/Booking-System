import React from 'react'
import Summary from '../components/SummaryBody'
import TopBar from '../components/TopBar'

function page() {
  return (
    <div className='flex min-h-screen md:pt-20  items-center flex-col'>
        <Summary />
    </div>
  )
}

export default page