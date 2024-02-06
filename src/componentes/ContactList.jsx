import React from 'react';
import styled from 'styled-components';

const ListaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5%;
  align-items: center;
`;

const StyledCard = styled.div`
      overflow: hidden;
    position: relative;
    border-radius: 0.5rem;
    width: 350px;
    padding: 5% 0;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background-color: #fff;
    margin-bottom: 1rem;
    align-items: center;
    display: flex;
    border: 1px solid #949494;
    gap: 5px;
    justify-content: space-evenly;
    padding: 1%;
`;

const StyledDetails = styled.div`
  padding: 1rem;
`;

const ContainerBottons = styled.div`
      display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #1aa06d;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d6e4b;
  }
`;

const ContactList = ({ contacts, deleteContact, editContact }) => {
  return (
    <ListaContainer>
      {contacts.map((contact, index) => (
        <StyledCard key={index}>
          <StyledDetails>
            <div className="text-title">{contact.name}</div>
            <div className="text-body">{contact.email}</div>
            <div className="text-body">{contact.address}</div>
            <div className="text-body">{contact.phone}</div>
          </StyledDetails>
          <ContainerBottons>
            <StyledButton onClick={() => editContact(index)}>Editar</StyledButton>
            <StyledButton onClick={() => deleteContact(index)}>Excluir</StyledButton>
          </ContainerBottons>
        </StyledCard>
      ))}
    </ListaContainer>
  );
};

export default ContactList;
