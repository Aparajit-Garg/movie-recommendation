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
import { Link } from 'react-router-dom';


const Header = () => {
    const [lightTheme, setLightTheme] = useState(false)

    var theme = lightTheme ? <WbSunnyIcon /> : <BrightnessIcon />
    
    const updateTheme = () => {
        setLightTheme(!lightTheme)
    }

    return (
        <div className={classes.main}>
            <span className={classes.text}>MOVIEVERSE</span>
            <input type="text" placeholder="Search for movies using keywords..."></input>
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
    )
}

export default Header;