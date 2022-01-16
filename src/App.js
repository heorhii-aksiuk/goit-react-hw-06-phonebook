import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/contacts/slice';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  function addContact(contact) {
    dispatch(actions.addContact(contact));
  }

  function deleteContact(id) {
    dispatch(actions.deleteContact(id));
  }

  function setFilter(value) {
    dispatch(actions.setFilter(value));
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
