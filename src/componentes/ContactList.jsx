import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 190px;
  height: 254px;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;

  &:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }
`;

const StyledDetails = styled.div`
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
`;

const StyledButton = styled.button`
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #008bf8;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;

  ${StyledCard}:hover & {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;

const ContactList = ({ contacts, deleteContact, editContact }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <StyledCard key={index}>
          <StyledDetails>
            <div className="text-title">{contact.name}</div>
            <div className="text-body">{contact.email}</div>
            <div className="text-body">{contact.address}</div>
            <div className="text-body">{contact.phone}</div>
          </StyledDetails>
          <StyledButton onClick={() => editContact(index)}>Editar</StyledButton>
          <StyledButton onClick={() => deleteContact(index)}>Excluir</StyledButton>
        </StyledCard>
      ))}
    </div>
  );
};

export default ContactList;
