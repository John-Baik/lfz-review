import React, { useState } from 'react';

export function Toggle() {
  const [toggle, setToggle] = useState(false);
  return <>
  <section>
    <div onClick={() => setToggle(!toggle)} id="box" className={toggle ? 'active' : ''}>
      <div id="circle" className={toggle ? 'on' : 'off'}></div>
    </div>
    <p>{toggle ? 'On' : 'Off'}</p>
    </section>
  </>;
}
