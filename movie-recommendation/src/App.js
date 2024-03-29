import React from 'react';
import Header from './components/Header/Header';
import classes from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import MovieDetail from './components/MovieDetail/MovieDetail';
import  {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Playlist from './components/Playlist/Playlist';

function App() {
	return (
    	<Router>
			<Header />
			<div className="App">
				<Routes>
					<Route path="/" element={[<NavBar />, <HomePage />]} exact />
					<Route path="/movieDetail" element={<MovieDetail />} exact />
                    <Route path="/playlist" element={<Playlist />} exact />
				</Routes>
			</div>
		</Router>
  	);
}

export default App;
