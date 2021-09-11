import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { Container } from "./App.styles";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (localStorage.getItem("myPhonebook")?.length > 0) {
      setContacts(JSON.parse(localStorage.getItem("myPhonebook")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myPhonebook", JSON.stringify(contacts));
  }, [contacts]);

  function getFilter(value) {
    setFilter(value);
  }

  function getContact(name, number) {
    const doubleContact = contacts.find((item) => item.name === name);
    if (doubleContact) {
      alert(`${doubleContact.name} is already in contacts`);
      return;
    }
    setContacts((prev) => [...prev, { id: uuidv4(), name, number }]);
  }

  function deleteContact(contactId) {
    setContacts(
      contacts.filter((item) => {
        return item.id !== contactId;
      })
    );
  }

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm submit={getContact} />
      <h2>Contacts</h2>
      <Filter change={getFilter} filter={filter} contacts={contacts} />
      <ContactList
        contacts={contacts}
        visibleContacts={visibleContacts}
        getElement={deleteContact}
      />
    </Container>
  );
}

export default App;
