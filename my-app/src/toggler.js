import React, { useState } from 'react';

export default function Toggler() {
  const [toggleStatus, settoggleStatus] = useState(true);
  function hanldeToggle(e) {
    settoggleStatus(!toggleStatus);
    if (toggleStatus === true) {
      e.target.innerHTML = 'display';
    } else {
      e.target.innerHTML = 'Hide';
    }
  }

  return (
    <div>
      {toggleStatus && (
        <div
          style={{
            display: toggleStatus,
            height: '100px',
            width: '100px',
            backgroundColor: 'powderblue',
          }}
        ></div>
      )}
      <button onClick={(e) => hanldeToggle(e)}>Hide</button>
    </div>
  );
}
