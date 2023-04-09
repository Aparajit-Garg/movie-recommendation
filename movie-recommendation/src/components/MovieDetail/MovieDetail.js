import React, {useState, useContext, useCallback, useEffect} from 'react';
import requests from '../../requests';
import api from '../../axios_base';
import { moviesContext } from '../../context/Movies';


const MovieDetail = props => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [,,,,movieId, setMovieId] = useContext(moviesContext);
    const [similarMovies, setSimilarMovies] = useState(null);
    const [cast, setCast] = useState(null);
    const [movieDetail, setMovieDetail] = useState(null);

    console.log("Checking movie id here: ", movieId);

    useEffect(() => {
        const getSimilarMovies = async () => {
            // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
            const url = `movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
            const response = await api.get(url);
            console.log(response);
            setSimilarMovies(response.data.results);
        }

        const getMovie = async () => {
            const url = `movie/${movieId}?api_key=${API_KEY}&language=en-US`;
            const response = await api.get(url);
            console.log(response);
            setMovieDetail(response.data.results);
        }

        const getCast = async () => {
            // https://api.themoviedb.org/3/credit/{credit_id}?api_key=<<api_key>>
            const url = `credit/`;
            const response = await api.get(url);
            console.log(response);
        }

        getMovie();
        getSimilarMovies();
    },[movieId]);
}

export default MovieDetail;