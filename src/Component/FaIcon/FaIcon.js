import React from "react";

function FaIcon({ icon, size, color }) {
  return (
    <div className='fa-icon' style={{ cursor: 'pointer', display: 'inline' }}>
      <span className={icon} style={{ fontSize: `${size}px`, color: color, padding: '0px 2px' }} />
    </div>
  );
}

export default FaIcon;
