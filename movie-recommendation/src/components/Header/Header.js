import React, {useState, useRef} from 'react';
import classes from './Header.module.css';

// playlist icon
import PlaylistIcon from '@mui/icons-material/PlaylistPlay';

// some brightness icon, there are multiple brightness levels, can be checked
import BrightnessIcon from '@mui/icons-material/Brightness4';
//sun icon showing light theme
import WbSunnyIcon from '@mui/icons-material/WbSunny';
// Home icon
import HomeIcon from '@mui/icons-material/Home';
// x icon showing clear symbol
import ClearIcon from '@mui/icons-material/Clear'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {moviesContext} from '../../context/Movies';
import api from '../../axios_base';
// import SearchMovies from '../SearchMovies/SearchMovies';

const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";

const Header = () => {
    const [,, lightTheme, setLightTheme, movieId, setMovieId] = useContext(moviesContext);
    // const [lightTheme, setLightTheme] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    var theme = lightTheme ? <BrightnessIcon /> : <WbSunnyIcon />
    const inputRef = useRef();
    const resultRef = useRef();
    
    const updateTheme = () => {

        if (lightTheme) {
            document.documentElement.style.setProperty('--primary-text-color', '#FFFFFF');
            document.documentElement.style.setProperty('--primary-background-color', '#06202A');
            document.documentElement.style.setProperty('--secondary-text-color', '#D1D5DB');
        }
        else {
            document.documentElement.style.setProperty('--primary-text-color', '#000000');
            document.documentElement.style.setProperty('--primary-background-color', '#FFFFFF');
            document.documentElement.style.setProperty('--secondary-text-color', '#000000');
        }

        setLightTheme(!lightTheme)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchText.length > 0) {

            const getResults = async () => {
                console.log(`${api}search/movie?&query=${searchText}&api_key=${API_KEY}`);
                // const url = 
                const res = await api.get(`search/movie?&query=${searchText}&api_key=${API_KEY}`);
                // const data = await res.json();
                console.log(res);
                setSearchResults(res.data.results);
                inputRef.current.disabled = "disabled";
                resultRef.current.style.display = "block";
            }
            getResults();
        }
        else {
            toast.error("Please enter 1 character");
        }
    }

    const handleClick = () => {
        resultRef.current.style.display = "none";
        setSearchResults([]);
        inputRef.current.removeAttribute("disabled");
    }

    const setSearchMovieDetails = (id) => {
        setMovieId(id);
        handleClick();
        setSearchText("");
    }

    return (
        <>
        <div className={classes.main}>
            <span className={classes.text}>MOVIEVERSE</span>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} className={classes.search} value={searchText} onChange = {(e) => setSearchText(e.target.value)}type="text" placeholder="Search for movies using keywords..."></input>    
            </form>

            <div ref={resultRef} className={classes.searchResults}>
                {searchResults.length > 0 && <ClearIcon onClick={handleClick} style={{ color:"var(--secondary-text-color)",alignSelf:"flex-end",cursor:"pointer" }} />}
                {searchResults?.map(res => (
                    // <SearchMovies value = {res} />
                    <Link style={{textDecoration:"none"}} to="/moviedetail" >
                        <div onClick={() => setSearchMovieDetails(res.id)} className={classes.search_section}>
                            <img src = {`${IMAGE_PATH}${res.backdrop_path || res.poster_path}`} alt= "No poster" />
                            <div className={classes.details}>
                                <h4>{res.original_title || res.title}</h4>
                                <h5>{res.release_date}</h5>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>

            <div className={classes.options}>
                <span className={classes.sunny} onClick={updateTheme}>
                    {theme}
                </span>
                <span className={classes.playlist}>
                    <Link to="/playlist">
                        <PlaylistIcon style={{marginLeft:"15px"}} />
                    </Link>
                </span>
                <span className={classes.home}>
                    <Link to="/">
                        <HomeIcon style={{marginLeft:"15px"}} />
                    </Link>
                </span>
            </div>
        </div>
        <ToastContainer />
        </>
    )
}

export default Header;