import React from 'react'
import styled from "styled-components";

const Li = styled.li`
	list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    width: 100%;
    background-color: ${props => props.isSelected ? "#142233" : ""};
`

const Block = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
	color: white;
	width: 55px;
	height: 55px;
	cursor: pointer;
    border-radius: 100px;
    background-color: ${props => props.color ? props.color : "palevioletred"};
`

const Contact = ({onSelect, contact, color, userName, isSelected}) => {
    return (
        <Li onClick={() => onSelect(contact,userName)} isSelected={isSelected}>
            <Block color={color} >
                {contact && contact.slice(0,3)}
            </Block>
        </Li>
    )
}

export default Contact