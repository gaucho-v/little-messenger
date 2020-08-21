import React, { useState } from 'react';
import { Input } from 'antd';
import { actionSearch } from '../../store/app/actions';
import styled from 'styled-components';
import { connect } from 'react-redux';

const CustomInput = styled(Input)`
  background: #4e5c6d;
  border: 1px solid #eee;
  color: white;
`;

const InputSearchContact = props => {
  const [inputValue, setInputValue] = useState('');
  const { actionSearch, authStore } = props;
  const { contacts: userContacts } = authStore;
  const search = e => {
    const contact = e.target.value;
    setInputValue(contact);
    actionSearch(contact, userContacts);
  };

  return (
    <CustomInput
      placeholder="Поиск конта..."
      value={inputValue}
      onChange={e => search(e)}
    />
  );
};

const mapStateFromProps = ({ authStore }) => ({ authStore });

const mapDispatchToProps = {
  actionSearch,
};

export default connect(
  mapStateFromProps,
  mapDispatchToProps
)(InputSearchContact);
