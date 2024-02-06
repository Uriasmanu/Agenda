import React, { useState, useEffect } from 'react';
import ContactForm from './componentes/ContactForm';
import ContactList from './componentes/ContactList';
import styled from 'styled-components';


const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((contact, i) => i !== index);
    setContacts(updatedContacts);
  };

  const editContact = (index) => {
    // Implementar edição do contato aqui
    alert('Função de edição ainda não implementada.');
  };

  return (
    <>
      <AppContainer>
        <h1>Agenda de Contatos</h1>
        <ContactForm addContact={addContact} />
      </AppContainer>
      
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
    </>
  );
};

export default App;
