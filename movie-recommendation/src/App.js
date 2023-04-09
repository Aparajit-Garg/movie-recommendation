import React from 'react';
import classes from "./App.module.css";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import  {Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
	return (
    	<Router>
			<Header />
			<NavBar />	
			<div className="App">
				<Routes>
					<Route path="/" element={[<HomePage />]} exact>
						{/* <NavBar /> */}
						{/* <HomePage /> */}
					</Route>
				</Routes>
			</div>
		</Router>
  	);
}

export default App;
