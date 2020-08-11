import React from 'react'
import Header from '../components/Header/Header'
import ContactPanel from '../components/ContactPanel/ContactPanel'
import InputMessage from '../components/InputMessage/InputMessage'
import Main from './Main/Main'
import styled from 'styled-components'
import Login from "./Login/Login";
import {signOut} from "../store/auth/actions";
import {connect} from "react-redux";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 720px;
`

const App = (props) => {
    const {signOut} = props;
	return (
		<>
			<Wrapper>
				<Header onSignOut={signOut}/>
				<ContactPanel />
				<Main/>
				<InputMessage />
			</Wrapper>
			<Login/>
		</>
	)
}


const mapStateFromProps = ({authStore}) => ({authStore});

const mapDispatchToProps = {
    signOut
};
export default connect(mapStateFromProps,mapDispatchToProps)(App)
