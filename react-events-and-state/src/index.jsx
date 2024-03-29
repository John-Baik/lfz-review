import React from 'react';
import ReactDOM from 'react-dom';
class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false
    };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.isClicked ? 'on' : 'off'}</button>;
  }

}

ReactDOM.render(<CustomButton />, document.getElementById('root'));

ReactDOM.render(<CustomButton/>, document.getElementById('root'));
