import { useState, useEffect } from 'react';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function getNewContact(newContact) {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      setContacts([newContact, ...contacts]);
    }
  }

  function removeContact(id) {
    setContacts([...contacts].filter(contact => contact.id !== id));
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
              onRemoveClick={removeContact}
            />
          </>
        ) : (
          <p>List is empty</p>
        )}
      </Section>
    </>
  );
}
