import React from 'react'
import Header from "../components/Header";
import ContactPanel from "../components/ContactPanel";
import InputMessage from "../components/InputMessage";
import styled from 'styled-components'
import {signOut} from "../store/auth/actions";
import {sendTyRecipientMessage,signOutApp,addMessage} from "../store/app/actions";
import {connect} from "react-redux";
import firebase from "firebase";
import {message} from "antd";
import Sidebar from "../components/Sidebar/Sidebar";
import WindowChat from "../components/WindowChat";
import {ROOT_ROUTE} from "../constants";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 720px;
`
const MainWrapper = styled.div`
	display: flex;
	min-height: 320px;
`

const Messenger = (props) => {
    const {signOut,authStore,  appStore,sendTyRecipientMessage,signOutApp,addMessage} = props;
    const {recipient,messages} = appStore;
    const {email, contacts} = authStore;
    const userName = props.authStore.name;
    const onSendMessage = (newMessage) => {
        sendTyRecipientMessage(userName, recipient, messages, newMessage)
    };
    const handleSignOut = () => {
        localStorage.removeItem('little-messenger-user');
        signOut();
        signOutApp();
        props.history.push(`${ROOT_ROUTE}/`);
        message.info('Выполнен выход из учетной записи')
    };

    const prevMessages = appStore.messages ? JSON.stringify(appStore.messages) : null

    const observer = firebase.database().ref(`users/${userName}/messagesList/${recipient}`);
    observer.on('value', snapshot => {
        const newMessages = snapshot.val() ? JSON.stringify(snapshot.val()) : null
        if( newMessages !== prevMessages) {
            addMessage(snapshot.val())
        }
    });


    return (
        <>
            <Wrapper>
                <Header onSignOut={handleSignOut} currentUser={email}/>
                <ContactPanel recipient={recipient} messages={messages}/>
                <MainWrapper>
                    <Sidebar
                        contacts={contacts}
                        userName={userName}
                    />
                    <WindowChat
                        userName={userName}
                        messages={messages}
                        recipient={recipient}
                    />
                </MainWrapper>
                <InputMessage onSendMessage={onSendMessage} currentUser={email} recipient={recipient}/>
            </Wrapper>
        </>
    )
}


const mapStateFromProps = ({authStore, appStore}) => ({authStore, appStore});

const mapDispatchToProps = {
    signOut,sendTyRecipientMessage,
    signOutApp,addMessage

};
export default connect(mapStateFromProps,mapDispatchToProps)(Messenger)