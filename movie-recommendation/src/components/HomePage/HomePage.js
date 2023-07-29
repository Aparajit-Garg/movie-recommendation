import React, {useState, useContext, useEffect} from 'react';
import {moviesContext} from '../../context/Movies';
import api from '../../axios_base';
import Tile from '../MovieTile/Tile';
import classes from './HomePage.module.css';
import FlipMove from "react-flip-move";

const HomePage = props => {
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useContext(moviesContext);

    useEffect( () => {
        const fetchMovies = async () => {
            const response = await api.get(selectedGenre);
            // console.log(response);
            setMovies(response.data.results); 
        }
        fetchMovies();
    }, [selectedGenre]);

    return (
        <div className={classes.main}>
            <FlipMove>
                {movies.length > 0 && movies.map(movie => (
                    <Tile movie={movie} />
                ))}
            </FlipMove>
        </div>
    );
};


export default HomePage;