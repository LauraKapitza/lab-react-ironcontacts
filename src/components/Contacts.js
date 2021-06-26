import React from 'react';
import JSON from '../contacts.json';
import './components.css';

class Contacts extends React.Component {
    state = {
        contacts: JSON.slice(0, 5)
    };

    addRandomContact = () => {
        // filter all contacts that are not shown yet
        const contacts = JSON.filter(contact => !this.state.contacts.includes(contact))
        //create a random index number
        let randomNum = Math.floor(Math.random() * contacts.length)
        //search for a contact at the random index position
        let newContact = contacts[randomNum]
        //add it to the this.state.contacts
        const contactsJoined = [...this.state.contacts]
        contactsJoined.push(newContact)
        //setState
        this.setState({
            contacts: contactsJoined
        })
    };

    render() {
        return(
            <div>
                <button onClick={this.addRandomContact}>Add Random Contact</button>
                <table>
                    <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map(contact => {
                                return (
                                    <tr key={contact.id}>
                                        <td>
                                            <img src={contact.pictureUrl} alt={contact.name}/>
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
                </table>
            </div>
        )
    }
}

export default Contacts;