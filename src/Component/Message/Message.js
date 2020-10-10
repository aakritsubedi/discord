import React from 'react'

import 'assets/css/Message.css'

function Message() {
  return (
    <div className='message'>
      <div className="profile-avatar">A</div>
      <div className="message-info">
        <h4>
          aakrit_subedi
          <span className="message-timestamp">
            timestamp
          </span>
        </h4>
        <p className='message-text'>
          This is a message ... 
        </p>
      </div>
    </div>
  )
}

export default Message
