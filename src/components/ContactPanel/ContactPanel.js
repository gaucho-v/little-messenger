import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	background-color: #233343;
`

const Name = styled.p`
	color: white;
	margin: 2px;
	margin-left: 16px;
`

const TextDate = styled.p`
	color: #3d5169;
	margin: 2px;
	margin-left: 16px;
	font-size: small;
`

const ContactPanel = ({recipient, messages}) => {
	let date = null;
	if(messages) {
		 date = messages[messages.length - 1].date

		console.log(date)
	}
	return (
		<Wrapper>
			{recipient ? <Name>Кому: {recipient}</Name> : <Name>Кому: не выбрано</Name>}
			{messages ? <TextDate>{date}</TextDate> : ''}
		</Wrapper>
	)
}

export default ContactPanel
