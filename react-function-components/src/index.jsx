import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>C!</button>;
}

// class Welcome extends React.Component {
//   render() {
//     return <button>works</button>;
//   }
// }

ReactDOM.render(<CustomButton />, document.querySelector('#root'));
