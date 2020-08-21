import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Contact from './Contact';
import { selectRecipient } from '../../store/app/actions';
import SearchedContacts from './SearchedContacts';

const Wrapper = styled.aside`
	background-color: #233343;
	width: 20%;
	border-top: 1px solid #15171980;
	border-bottom: 1px solid #15171980;
	overflow-y: auto;
    height: 364px;
    display: flex;
    justify-content: center;
}
`;
const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;


const Sidebar = ({
  foundedContacts,
  contacts,
  selectRecipient,
  userName,
  currentChatId,
  onAddContact,
  onRemoveContact,
}) => (
  <Wrapper>
    <Ul>
      {contacts &&
        !foundedContacts &&
        contacts.map((contact, id) => (
          <Contact
            key={contact + id}
            contact={contact}
            onSelect={selectRecipient}
            isSelected={currentChatId === contact}
            userName={userName}
            onRemoveContact={onRemoveContact}
          />
        ))}
      {foundedContacts && <SearchedContacts onAddContact={onAddContact} />}
    </Ul>
  </Wrapper>
);

const mapStateToProps = state => ({
  currentChatId: state.appStore.recipient,
  foundedContacts: state.appStore.foundedContacts,
});

const mapDispatchToProps = {
  selectRecipient,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
