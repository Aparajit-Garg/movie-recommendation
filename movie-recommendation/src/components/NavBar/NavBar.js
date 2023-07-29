import React, {useContext} from 'react';
import classes from './NavBar.module.css'
import {moviesContext} from '../../context/Movies';
import requests from '../../requests';


const NavBar = props => {

    const [selectedGenre, setSelectedGenre] = useContext(moviesContext);

    return (
        <div className={classes.navBar}>
            <h2 onClick={() => setSelectedGenre(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedGenre(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedGenre(requests.fetchComedy)}>Comedy</h2>
            <h2 onClick={() => setSelectedGenre(requests.fetchHorror)}>Horror</h2>
            <h2 onClick={() => setSelectedGenre(requests.fetchAction)}>Action</h2>
            <h2 onClick={() => setSelectedGenre(requests.fetchScifi)}>SciFi</h2>
            <h2 onClick={() => setSelectedGenre(requests.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setSelectedGenre(requests.fetchRomance)}>Romance</h2>

        </div>
    );
}

export default NavBar;