import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <>
    <h1>Testing!1</h1>
    <button>Click Me!</button>
    </>;
}

ReactDOM.render(<CustomButton />, document.getElementById('root'));
