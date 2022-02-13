import React from 'react'
import './styles/nav.css'
const Navbar = () => {
  return (
<>
    <div className='nav-container'>
      {/* <div className='logo-name'><h2><span>O</span>high xcul base</h2></div> */}
      <div className='navs'>
          <div className='element1'><span className='title'>OCORPOPERATION</span></div>
          <div className='element1'><span>john</span></div>
          <div className='element1'><span>john</span></div>
          <div className='element1'><span>john</span></div>
          <div className='element1'><span>john</span></div>

      </div>
      <div className='userobject'>
          <div className='element2'><img src='logo192.png' alt='img' className='profileImage'/><p className='userName'>username</p></div>
          <div className='element2'><img src='logo192.png' alt='img' className='profileImage'/></div>
      </div>
    </div>
</>
  )
}

export default Navbar