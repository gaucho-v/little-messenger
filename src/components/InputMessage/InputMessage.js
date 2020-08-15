import React, {useState, useRef, useEffect} from 'react'
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

const InputMessage = ({onSendMessage, currentUser, recipient}) => {
	const [value, setValue] = useState('');
	const change = (e) => setValue(e.target.value);
	const sub = (e) => {
		e.preventDefault();
		onSendMessage(value)
		setValue('')
	};
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	})
	return (
		<Wrapper>
			<form onSubmit={(e) => sub(e)}>
				<Input ref={inputRef} placeholder='введите сообщение' disabled={!currentUser || !recipient} value={value} onChange={(e) => change(e)}/>
			</form>
		</Wrapper>
	)
}

export default InputMessage
