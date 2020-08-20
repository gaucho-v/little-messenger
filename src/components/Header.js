import React from 'react'
import styled from 'styled-components'
import {Button} from "react-bootstrap";

const Wrapper = styled.header`
    display: flex;
    background-color: #314154;
    text-align: center;
    padding: 2px;
    justify-content: space-between;
`;

const SignOut = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
	color: white;
	&:hover {
	color: aliceblue } 
`

const CurrentUser = styled.div`
	display: flex;
	justify-content: center;
	margin-left: 16px;
	color: white;
	font-size: larger;
`

const Header = ({onSignOut, currentUser}) => {

	return (
		<Wrapper>
			<CurrentUser>
				{currentUser ? `Пользователь: ${currentUser}` : 'Пользователь: не установлен'}
			</CurrentUser>
			<SignOut>
				<Button style={{backgroundColor: '#2b5279'}} variant="secondary" size='sm' onClick={onSignOut}>
					Выход
				</Button>
			</SignOut>
		</Wrapper>
	)
}

export default Header
