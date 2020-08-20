import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import Message from "./Message";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	background-color: #142233;
	width: 100%;
	align-items: flex-end;
	border: 1px solid black;
	overflow-y: auto;
    height: 364px;
`

const Text = styled.p`
	color: red;
	position: relative;
    left: -40%;
    top: 40%;
`


const WindowChat = ({ messages,userName,recipient }) => {
	const wrapperRef = useRef(null);
	useEffect(() => {
		wrapperRef.current.scrollTop = wrapperRef.current['scrollHeight'];
	});
	return (
		<Wrapper ref={wrapperRef}>
			{userName ? messages ? messages.map((el,id) =>
					<Message text={el.text} author={el.author} key={el.text + id} recipient={recipient} date={el.date}/>) :
					<Message text='Сообщений нет' recipient={recipient}/> :
					<Text>Пропущена стадия логина</Text> }
		</Wrapper>
	)
}

export default WindowChat
