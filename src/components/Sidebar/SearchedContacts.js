import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const SearchedContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 55px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #eee;
  background: #1bca1bcc;
  margin: 5px;
`;

const Li = styled.li`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 100%;
  background-color: "#142233";
`;

const ButtonAddContact = styled.button`
    height: 30px;
    background: green;
`

const SearchedContacts = props => {
  const { foundedContacts } = props.appStore;
  const { onAddContact } = props;
  return (
    <>
      {foundedContacts &&
        foundedContacts.map((el, idx) => (
          <Li key={idx + el}>
            <SearchedContact>{el}</SearchedContact>
            <ButtonAddContact onClick={() => onAddContact(el)}>ADD</ButtonAddContact>
          </Li>
        ))}
    </>
  );
};

const mapStateFromProps = ({ appStore }) => ({ appStore });

export default connect(mapStateFromProps, null)(SearchedContacts);
