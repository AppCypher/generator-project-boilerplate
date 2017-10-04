import React from 'react';
import style from '../../res/scss/main.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Will' };
  }

  render() {
    const { props } = this;

    setTimeout(() => {
      this.setState({ name: 'Madsen' });
    }, 2000);

    return (
      <div className={'box'}>{this.state.name} {props.name} rocks!</div>
    );
  }
}

export default Header;

