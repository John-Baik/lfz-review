import React, { useState } from 'react';

export function Toggle() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex center">
      <div className={toggle ? 'container green' : 'container'} onClick={() => setToggle(!toggle)}>
        <div id="circle" className={toggle ? 'on' : 'off'}></div>
      </div>
    </div>
  );
}
