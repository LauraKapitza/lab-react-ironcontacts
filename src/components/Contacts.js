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

    sortByName = () => {
        //make a copy of this.state.contacts
        const _contacts = this.state.contacts
        //order the copy by name from A to Z
        _contacts.sort((obj1, obj2) => (obj1.name > obj2.name) ? 1 : -1)
        //setState
        this.setState({
            contacts: _contacts
        })
    }

    sortByPopularity = () => {
        //make a copy of this.state.contacts
        const _contacts = this.state.contacts
        //order the copy by popularity from highest to smallest
        _contacts.sort((obj1, obj2) => (obj1.popularity > obj2.popularity) ? -1 : 1)
        ///set State
        this.setState({
            contacts: _contacts
        })
    }

    deleteContact = (id) => {
        const _stateContacts = this.state.contacts;
        const contactIndex = _stateContacts.findIndex(element => element.id === id);
        _stateContacts.splice(contactIndex, 1)
        
        this.setState({
            contacts: _stateContacts
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.addRandomContact}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
                <table>
                    <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
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
                                        <td>
                                            <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
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