import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const Splitme = loadable(() => import('./Splitme'), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    Splitme.preload();
  }
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handleClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <Splitme />}
      </header>
    </div>
  );
}

export default App;
