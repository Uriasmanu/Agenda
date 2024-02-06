import React from 'react';

const ContactList = ({ contacts, deleteContact, editContact }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <div>{contact.name}</div>
          <div>{contact.email}</div>
          <div>{contact.address}</div>
          <div>{contact.phone}</div>
          <button onClick={() => editContact(index)}>Editar</button>
          <button onClick={() => deleteContact(index)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
