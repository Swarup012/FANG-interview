import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <div>
        <Header/>
        
        <div className='px-5 '>
          {children}
        </div>
    </div>
  )
}

export default DashboardLayout