import React, {useEffect} from 'react'
import Login from "./Login";
import Messenger from "./Messanger";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import {loadUserData} from "../store/auth/actions";
import {ROOT_ROUTE} from '../constants'


const App = (props) => {
	const {authStore: {name}} = props;
	const {isMobile} = props;
	useEffect(() => {
			if(name) props.loadUserData(name)
	}, []);
	return (
		<>
			<Router>
				<Route exact path={`${ROOT_ROUTE}/`} render={(props) =>  !name ? <Login {...props} /> : <Redirect to={`${ROOT_ROUTE}/messenger`}/> }/>
				<Route path={`${ROOT_ROUTE}/messenger`} component={Messenger}/>
			</Router>
		</>
	)
};

const mapStateFromProps = ({authStore}) => ({authStore});

const mapDispatchToProps = {
	loadUserData
};

export default connect(mapStateFromProps, mapDispatchToProps)(App)
