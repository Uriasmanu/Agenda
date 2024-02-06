// App.jsx

import React, { useState, useEffect } from 'react';
import ContactForm from './componentes/ContactForm';
import ContactList from './componentes/ContactList';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    if (editingIndex !== null) {
      // Se estiver editando, atualize o contato existente
      const updatedContacts = [...contacts];
      updatedContacts[editingIndex] = newContact;
      setContacts(updatedContacts);
      setEditingIndex(null);
    } else {
      // Se não estiver editando, adicione um novo contato
      setContacts([...contacts, newContact]);
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((contact, i) => i !== index);
    setContacts(updatedContacts);
  };

  const editContact = (index) => {
    // Ao editar, preencha o formulário com os detalhes do contato atual
    setEditingIndex(index);
  };

  return (
    <>
      <AppContainer>
        <h1>Agenda de Contatos</h1>
        <ContactForm addContact={addContact} editingIndex={editingIndex} contacts={contacts} />
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
