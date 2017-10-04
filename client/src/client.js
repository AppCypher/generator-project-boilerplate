import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>This works! </h1> 
        <Header name={'Hello'}/> 
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
