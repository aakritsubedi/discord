import React from 'react'

function Avatar({ imgSrc, username }) {
  return (
    <div>
      {imgSrc ? 
      (
        <img src={imgSrc} className='profile-avatar-image' alt='userimage'/>
      ) :
      (
        <div className='profile-avatar'>{username ? username.split(0,1) : 'dD' }</div>
      ) 
    }
    </div>
  )
}

export default Avatar
