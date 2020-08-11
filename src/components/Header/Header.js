import React from 'react'
import styled from 'styled-components'

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
`

const Header = ({onSignOut, currentUser}) => {

	return (
		<Wrapper>
			<CurrentUser>
				{currentUser ? currentUser : 'Не установлен'}
			</CurrentUser>
			<SignOut>
				<button onClick={() => onSignOut()}>
					Выход
				</button>
			</SignOut>
		</Wrapper>
	)
}

export default Header
