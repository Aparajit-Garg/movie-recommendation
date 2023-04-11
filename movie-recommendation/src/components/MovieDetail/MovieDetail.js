import React, {useState, useContext, useCallback, useEffect} from 'react';
import api from '../../axios_base';
import { moviesContext } from '../../context/Movies';
import StarRateIcon from '@mui/icons-material/StarRate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import classes from './MovieDetail.module.css';
import {Link} from "react-router-dom";


const MovieDetail = props => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [,,,,movieId, setMovieId] = useContext(moviesContext);
    const [similarMovies, setSimilarMovies] = useState(null);
    const [cast, setCast] = useState(null);
    const [movieDetail, setMovieDetail] = useState(null);
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";
    console.log("Checking movie id here: ", movieId);

    useEffect(() => {
        const getSimilarMovies = async () => {
            // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
            const url = `movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
            const response = await api.get(url);
            console.log("GET SIMILAR MOVIES: ");
            console.log(response);
            setSimilarMovies(response.data.results);
        }

        const getMovie = async () => {
            const url = `movie/${movieId}?api_key=${API_KEY}&language=en-US`;
            const response = await api.get(url);
            console.log("GET MOVIE: ");
            console.log(response);
            setMovieDetail(response.data);
            // console.log(typeof response.data.release_date);
            console.log("Movie detail: ", movieDetail);
        }

        const getCast = async () => {
            // movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
            const url = `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
            const response = await api.get(url);
            // setCast()
            console.log("CAST: ");
            console.log(response);
        }

        getMovie();
        getSimilarMovies();
        getCast();
    },[movieId]);

    console.log("HERE CHECKING: ", movieId);

    if (!movieId) {
        console.log("Checking: ");
        return <div>Loading...</div>
    }
    // else {
    //     console.log("Yahan pr aa gya: ", movieId);
    // }
    else {
        console.log("image path: ");
        console.log(`${IMAGE_PATH}${movieDetail?.backdrop_path}`);
    }
    return (
        <>
        <div className={classes.first__section}>
            <div className={classes.movie_poster}>
                <img src={`${IMAGE_PATH}${movieDetail?.poster_path}`} alt="No poster"/>
            </div>

            <div className={classes.movie_info}>
                <div className={classes.first_line}>
                    <h2>{movieDetail?.original_title}({movieDetail?.release_date.substring(0, 4)})</h2>
                    <span className={classes.rating}>
                        <span>
                            <StarRateIcon style={{color:"#f9d71c", display:"inline-block", verticalAlign:"middle"}} />
                        </span>
                        <span>
                            {movieDetail?.vote_average}/10
                        </span>
                    </span>
                </div>
                

                <div className={classes.second_line}>
                    <span>{movieDetail?.release_date} | {movieDetail?.runtime} mins | </span>
                    <span> {movieDetail?.genres[0].name} {movieDetail?.genres[1].name} {movieDetail?.genres[2].name}</span>
                </div>

                <div className={classes.synopsis}>
                    <h4>Synopsis</h4>
                </div>
                <div className={classes.overview}>
                    <p> {movieDetail?.overview}</p>
                </div>
                <div className={classes.third_section}>
                    <button>Add to playlist</button>
                </div>
                <div className={classes.fourth_section}>
                    <ArrowBackIcon style={{color: "#FFFF", display: "inline-block", verticalAlign: "middle"}}/>
                    <Link className={classes.link} style={{textDecoration: "none"}} to="/">
                        <h5>Back to Home</h5>
                    </Link>
                </div>
            </div>
        </div>

        <div className={classes.cast}>
            <h3> CAST</h3>
            <div className={classes.castCard}>

            </div>
        </div>

        <div className={classes.similarMovies}>
            <h3> Similar Movies </h3>
        </div>
        </>
    )
}

export default MovieDetail;