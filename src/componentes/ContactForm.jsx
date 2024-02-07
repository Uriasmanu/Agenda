import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #008bf8;
  color: #fff;
  cursor: pointer;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

const ContactForm = ({ addContact, editingIndex, contacts }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Se estiver editando, preencha o formulário com os detalhes do contato atual
    if (editingIndex !== null) {
      const { name, email, address, phone } = contacts[editingIndex];
      setName(name);
      setEmail(email);
      setAddress(address);
      setPhone(phone);
    }
  }, [editingIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // Verifica se os outros campos estão vazios
    if (!name.trim() || !address.trim() || !phone.trim()) {
      alert('Todos os campos, exceto o e-mail, são obrigatórios.');
      return; // Retorna sem adicionar o contato se algum campo estiver vazio
    }
    addContact({ name, email, address, phone });
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <StyledInput type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <StyledInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <StyledInput type="text" placeholder="Endereço" value={address} onChange={(e) => setAddress(e.target.value)} required />
      <StyledInput type="tel" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <StyledButton type="submit">{editingIndex !== null ? 'Atualizar' : 'Adicionar'}</StyledButton>
    </FormContainer>
  );
};

export default ContactForm;
