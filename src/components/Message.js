import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #2b5279;
    margin: 5px 10px;
    max-width: 45%;
    border-radius: 5px;
`

const Information = styled.p`
    color: red;
	position: relative;
    left: -40%;
    top: 40%;
`

const MessageWrapper = styled.div`
    display: flex;
    padding: 5px 5px 0px 5px;
`

const MessageAuthor = styled.p`
    padding: 0;
    margin: 0;
    margin-right: 5px;
    color: black;
    font-weight: 400;
`

const MessageDate = styled.p`
    margin: 0;
    padding: 0;
    color: #6386b1;
    
`

const MessageText = styled.p`
    margin: 0;
    padding: 0;
    color: white;
    margin: 0;
    padding: 0px 5px 5px 5px;
    color: white;
`

const MessagesListIsEmpty = styled.p`
    display: flex;
    color: white;
    border: 1px solid #eee;
    padding: 15px;
    position: relative;
    left: -40%;
    top: 35%;
`


const Message = ({text,recipient,author,date}) => {
    let style = {};
    if(recipient === author) {
        style = { backgroundColor: 'rgb(50 61 125)' }
    }
    if (text === 'Сообщений нет' && recipient) {
        return <MessagesListIsEmpty>{text}</MessagesListIsEmpty>
    }
    return (
        <>
            {recipient ?
                <Wrapper style={style}>
                    <MessageWrapper>
                        <MessageAuthor>{author}</MessageAuthor>
                        <MessageDate>{date.slice(12)}</MessageDate>
                    </MessageWrapper>
                        <MessageText>{text}</MessageText>
                </Wrapper> :
                <Information>Выберите диалог</Information>}</>
    )
}

export default Message