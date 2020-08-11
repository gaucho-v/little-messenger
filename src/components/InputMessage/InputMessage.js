import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div``

const Input = styled.input`
	background-color: #142233;
	min-height: 30px;
	border: none;
	color: white;
	outline: none;
	width: 100%;
	padding: 15px;
	box-sizing: border-box;
`

const InputMessage = ({onChange}) => {
	return (
		<Wrapper>
			<Input placeholder='введите сообщение' />
		</Wrapper>
	)
}

export default InputMessage
