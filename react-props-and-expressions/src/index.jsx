import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <>
    <button>{props.text}</button>;
    <h1>{props</h1>.header}</h1>
  </>;

}

const element = (
  <div>
    <CustomButton text="I" header="hello"/>
    <CustomButton text="know" header="sucks"/>
    <CustomButton text="React!" header="wow"/>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
