import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicks: 0
    };
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });

  }

  render() {
    let color = '';
    const clicks = this.state.clicks;
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
    return <button className={color} onClick={this.handleClick}>Button</button>;
  }
}

export default Button;
