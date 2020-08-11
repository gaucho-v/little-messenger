import React from 'react'
import styled from 'styled-components'
import Message from "../Message/Message";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	background-color: #142233;
	width: 100%;
	align-items: flex-end;

	border: 1px solid black;
`

const Text = styled.p`
	color: white;
	margin: 4px;
`

const WindowChat = ({ messages }) => {
	return (
		<Wrapper>
			{!messages ? <Message text='Привет, как дела?'/> : <Text>Сообщений нет</Text>}
			<Message text='Здравствуй! Отлично!'/>
		</Wrapper>
	)
}

export default WindowChat
