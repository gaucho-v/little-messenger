import React from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components'
import Contact from "./Contact";
import {selectRecipient,} from "../../store/app/actions";

const Wrapper = styled.aside`
	background-color: #233343;
	width: 15%;
	border-top: 1px solid #15171980;
	border-bottom: 1px solid #15171980;
	overflow-y: auto;
    height: 364px;
    display: flex;
    justify-content: center;
}
`
const Ul = styled.ul`
	width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
`

const colors = ['#980303', '#28a745', '#ffc107', '#20c997'];

const Sidebar = ({contacts, selectRecipient, userName, currentChatId}) => {
    return (
        <Wrapper>
            <Ul>
                {contacts &&
                contacts.map((contact, id) => {
                    const color = colors[id];
                    return (
                        <Contact key={contact + id}
                                 color={color}
                                 contact={contact}
                                 onSelect={selectRecipient}
								 isSelected={currentChatId === contact}
                                 userName={userName}
                        />
                    )
                })}
            </Ul>
        </Wrapper>
    )
}

const mapStateToProps = state => ({
	currentChatId: state.appStore.recipient,
})

const mapDispatchToProps = {
	selectRecipient
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);