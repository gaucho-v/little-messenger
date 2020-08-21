import React from 'react';
import styled from 'styled-components';


const Li = styled.li`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 100%;
  background-color: ${props => (props.isSelected ? '#142233' : '')};
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 55px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #eee;
  background: #4e5c6d;
  margin: 5px;
`;

const ButtonRemoveContact = styled.button`
    height: 30px;
    background: red;
`;

const Contact = ({ onSelect, contact, color, userName, isSelected, onRemoveContact }) => (
  <Li isSelected={isSelected}>
    <Block
      color={color}
      onClick={() => onSelect(contact, userName)}
    >
      {contact && contact.slice(0, 3)}
    </Block>
    <ButtonRemoveContact onClick={() => onRemoveContact(contact)}>X</ButtonRemoveContact>
  </Li>
);

export default Contact;
