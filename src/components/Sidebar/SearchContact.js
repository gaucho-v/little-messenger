import React, {useState} from 'react'
import {Input} from "antd";
import {actionSearch} from "../../store/app/actions";
import styled from "styled-components";
import {debounce} from 'lodash'
import {connect} from 'react-redux'

const CustomInput = styled(Input)`
    background: #4e5c6d;
    border: 1px solid #eee;
    color: white;
`

const SearchContact = (props) => {
    const [inputValue, setInputValue] = useState('');
    const {actionSearch} = props
    const {foundedContacts} = props.appStore
    const search = (e) => {
        const contact = e.target.value
        setInputValue(contact)
        actionSearch(contact)
    }
    console.log(foundedContacts)
    return (
        <>
            <CustomInput placeholder='Поиск конта...' value={inputValue}  onChange={(e) => search(e)}/>
            {foundedContacts.length && foundedContacts.map((el,idx) => {
                return (
                    <div key={idx}>{el}</div>
                )
            })}
        </>

    )
};

const mapStateFromProps = ({appStore}) => ({appStore});

const mapDispatchToProps = {
    actionSearch
}

export default connect(mapStateFromProps,mapDispatchToProps)(SearchContact)