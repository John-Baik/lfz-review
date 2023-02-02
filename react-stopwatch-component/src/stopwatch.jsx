/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

export function Stopwatch() {
  const [toggle, setToggle] = useState(false);
  let [time, setTime] = useState(0);

  useEffect(() => {
    if (toggle) {
      const obj = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
      return () => {
        clearInterval(obj);
      };
    }
  }, [toggle]);

  return <section>
    <div onClick={() => {
      !toggle ? setTime(time = 0) : console.log('nothing');
    }} id="circle">
      <p>{time}</p>
    </div>
    <i onClick={() => setToggle(!toggle)} className={toggle ? 'fa-solid fa-pause' : 'fa-solid fa-play'}></i>
  </section>;
}

// export class Stopwatch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toggle: false,
//       seconds: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.reset = this.reset.bind(this);
//   }

//   handleClick() {
//     if (!this.state.toggle) {
//       this.timerid = setInterval(() => {
//         this.setState({ seconds: this.state.seconds + 1 });
//       }, 1000);
//     } else {
//       clearInterval(this.timerid);
//     }
//     this.setState({ toggle: !this.state.toggle });
//   }

//   reset() {
//     if (!this.state.toggle) {
//       clearInterval(this.timerId);
//       this.setState({ seconds: 0 });
//     }
//   }

//   render() {
//     return (
//     <section>
//      <div onClick={this.reset} id="circle">
//        <p>{this.state.seconds}</p>
//      </div>
//       <i onClick={this.handleClick} className={this.state.toggle ? 'fa-solid fa-pause' : 'fa-solid fa-play'}></i>
//   </section>
//     );
//   }
// }
