import Contacts from './components/Contacts.js';
import React from 'react';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App" >
        <h1>IronContacts</h1>
        <Contacts />
      </div>
    );
  }
}

export default App;