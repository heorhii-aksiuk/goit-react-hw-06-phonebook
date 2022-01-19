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

  function getNewContact(newContact) {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(actions.addContact(newContact));
    }
  }

  function handleFilter(e) {
    dispatch(actions.setFilter(e.target.value));
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
              onRemoveClick={id => dispatch(actions.deleteContact(id))}
            />
          </>
        ) : (
          <p>List is empty</p>
        )}
      </Section>
    </>
  );
}
