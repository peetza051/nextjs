import React from 'react'
import Link from 'next/link'





const Navber = () => {
  return (
    <div className=' flex bg-blue-800 justify-between h-16 px-10 py-4 items-center '>
      <div className="logo"><Link href="/">logo</Link></div>
      <ul className="menu flex space-x-6 ">
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/contect">Contact</Link></li>
        <li><Link href="/learnmore">Learn More</Link></li>
      </ul>
    </div>
  )
}

export default Navber


//flex เป็นการบอกว่าให้จัดกลุ่มไปในแนวเดียวกัน แนวใดแนวนึ่ง
//justify จัดในแกนหลัก