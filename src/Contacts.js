import React from 'react';
import JSON from './contacts.json';
import './App.css';

class Contacts extends React.Component {
    state = {
        contacts: JSON.slice(0, 5)
    }

    render() {
        console.log(this.state.contacts)
        return(
            <tbody>
                {
                    this.state.contacts.map(contact => {
                        return (
                            <tr key={contact.id}>
                                <td>
                                    <img src={contact.pictureUrl} />
                                </td>
                                <td>
                                    <p>{contact.name}</p>
                                </td>
                                <td>
                                    <p>{contact.popularity}</p>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }
}

export default Contacts;