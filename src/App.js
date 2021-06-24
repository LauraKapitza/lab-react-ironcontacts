import React from 'react';
import Contacts from './Contacts.js';
import './App.css';

class App extends React.Component {
  
  render() {
    
    return (
      <div className="App" >
        <h1>IronContacts</h1>
        <table>
          <thead>
              <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
              </tr>
          </thead>
          <Contacts />
        </table>
      </div>
    );
  }
}

export default App;