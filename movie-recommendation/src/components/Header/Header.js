import React, {useState} from 'react';
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

const Header = () => {
    const [,, lightTheme, setLightTheme, movieId, setMovieId] = useContext(moviesContext);
    // const [lightTheme, setLightTheme] = useState(false)
    const [searchText, setSearchText] = useState('');

    var theme = lightTheme ? <BrightnessIcon /> : <WbSunnyIcon />
    
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
            console.log("Entered character: ", searchText);
        }
        else {
            toast.error("Please enter 1 character");
        }
    }

    return (
        <>
        <div className={classes.main}>
            <span className={classes.text}>MOVIEVERSE</span>
            <form onSubmit={handleSubmit}>
                <input className={classes.search} value={searchText} onChange = {(e) => setSearchText(e.target.value)}type="text" placeholder="Search for movies using keywords..."></input>    
            </form>
            {/* <input className={classes.search} type="text" placeholder="Search for movies using keywords..."></input> */}
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