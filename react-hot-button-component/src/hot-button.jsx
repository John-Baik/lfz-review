import React, { useState } from 'react';

export function Button() {
  const [clicks, setCount] = useState(0);
  let color = '';
  if (clicks < 4) {
    color = 'cold';
  } else if (clicks < 7) {
    color = 'cool';
  } else if (clicks < 9) {
    color = 'tepid';
  } else if (clicks < 12) {
    color = 'warm';
  } else if (clicks < 16) {
    color = 'hot';
  } else {
    color = 'nuclear';
  }
  return (
  <button className={color} onClick={() => setCount(clicks + 1)}>Hot Button</button>
  );
}
