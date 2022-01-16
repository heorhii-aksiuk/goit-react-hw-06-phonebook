import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/contacts/contacts-actions';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';

export default function App() {
  const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  function addContact(newContact) {
    dispatch(actions.addContact(newContact));
  }

  function deleteContact(id) {
    dispatch(actions.deleteContact(id));
  }

  function getNewContact(newContact) {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      addContact(newContact);
    }
  }

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmitContact={getNewContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={handleFilter} />
            <Contacts
              contacts={filteredContacts}
              onRemoveClick={deleteContact}
            />
          </>
        ) : (
          <p>List is empty</p>
        )}
      </Section>
    </>
  );
}

//localStorage without Redux
/*   useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); */
