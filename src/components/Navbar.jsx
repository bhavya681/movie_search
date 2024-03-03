/*
import React from 'react'

const Navbar = () => {
  return (
    <div className='main z-20 lg:flex md:flex flex-wrap justify-between items-center 
    px-4 bg-[#40407a] py-4 shadow-md sticky top-0'>
      <div className='left flex items-center space-x-3'>
      <img className='w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="" />
        <h2 className='logo font-bold text-2xl text-white text-center'>MovieStuffing</h2>
      </div>
      <div className='right' >
        <ul className='flex space-x-4 text-white justify-center'>
        <li >Home</li>
        <li >About</li>
        <li >Contact</li>
        <li >Services</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
*/


import React from 'react'

const Navbar = () => {
  return (
    <div className='main flex justify-between p-5 bg-[#40407a]' style={{ textAlign: "center" }}>
    <div className='left flex space-x-4'>
      <img className='w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="" />
      <h2 className='logo font-bold text-2xl text-white text-center'>MovieStuffing</h2>
    </div>
    <div className='right'>
      <ul className='flex space-x-4 text-white' style={{ fontSize: "19px", fontWeight: "medium", cursor: "pointer", textAlign: "center" }}>
        <li >Home</li>
        <li >About</li>
        <li >Contact</li>
        <li >Services</li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar

// import React from 'react'

// const Navbar = () => {

//   return (
    // <div className='main flex justify-between p-5 bg-[#40407a]' style={{ textAlign: "center" }}>
    //   <div className='left flex space-x-4'>
    //     <img className='w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="" />
    //     <h2 className='logo font-bold text-2xl text-white text-center'>MovieStuffing</h2>
    //   </div>
    //   <div className='right'>
    //     <ul className='flex space-x-4 text-white' style={{ fontSize: "19px", fontWeight: "medium", cursor: "pointer", textAlign: "center" }}>
    //       <li >Home</li>
    //       <li >About</li>
    //       <li >Contact</li>
    //       <li >Services</li>
    //     </ul>
    //   </div>
    // </div>
//   )
// }

// export default Navbar

