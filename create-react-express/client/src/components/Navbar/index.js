import React, {Component} from 'react';

function Navbar() {
  return (
    <div className='nav'>
      <ul>
        <li>
          <a href='/'>Freelance-A-Lot</a>
        </li>
        <li>
          <a href='/jobs'>Jobs</a>
        </li>
        <li>
          <a href='/profile'>Profile</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar; 