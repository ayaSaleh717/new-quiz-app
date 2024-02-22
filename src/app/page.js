// import { Button } from 'bootstrap'
import Link from 'next/link'
import React from 'react'
import './globals.css'
// import Card from './component/Card/Card'

function HomePage() {
  return (
    <div>
    HomePage
   <Link href='/categorys'>
    <button className='btn' >categorys</button>
   </Link>
      
    </div>
  )
}

export default HomePage
