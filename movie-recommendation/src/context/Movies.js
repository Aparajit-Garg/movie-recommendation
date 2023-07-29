import React, {useState, createContext} from 'react';
import requests from '../requests';

export const moviesContext = createContext();


function MoviesProvider(props) {

    const [theme, setTheme] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(requests.fetchTrending);
    const [movieId, setMovieId] = useState(0);
    const [myMovies, setMyMovies] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    return (
        <moviesContext.Provider value = {[
            selectedGenre,
            setSelectedGenre,
            theme,
            setTheme,
            movieId,
            setMovieId,
            myMovies,
            setMyMovies,
            playlist,
            setPlaylist
        ]}>
            {props.children}
        </moviesContext.Provider>
    );
}

export default MoviesProvider;