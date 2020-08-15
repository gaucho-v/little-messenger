import React, {useEffect} from 'react'
import Login from "./Login/Login";
import Messenger from "./Messanger/Messanger";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import {loadUserData} from "../store/auth/actions";


const App = (props) => {
	const {authStore: {name}} = props;
	useEffect(() => {
			if(name) props.loadUserData(name)
	}, []);
	return (
		<>
			<Router>
				<Route exact path='/' render={(props) =>  !name ? <Login {...props} /> : <Redirect to='/messenger'/> }/>
				<Route path='/messenger' component={Messenger}/>
			</Router>
		</>
	)
};

const mapStateFromProps = ({authStore}) => ({authStore});

const mapDispatchToProps = {
	loadUserData
};

export default connect(mapStateFromProps, mapDispatchToProps)(App)
