import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #233343;
`;

const RecipientName = styled.p`
  color: white;
  margin: 2px;
  margin-left: 16px;
  font-size: medium;
`;

const LastMessageDate = styled.p`
  color: #3d5169;
  margin: 2px;
  margin-left: 16px;
  font-size: small;
`;

const ContactPanel = ({ recipient, messages }) => {
  let date = '';
  if (messages) date = messages[messages.length - 1].date;
  return (
    <Wrapper>
      {recipient ? (
        <RecipientName>
          Кому:
          {recipient}
        </RecipientName>
      ) : (
        <RecipientName>Кому: не выбрано</RecipientName>
      )}
      <LastMessageDate>
        Дата последнего сообщения:
        {date}
      </LastMessageDate>
    </Wrapper>
  );
};

export default ContactPanel;
