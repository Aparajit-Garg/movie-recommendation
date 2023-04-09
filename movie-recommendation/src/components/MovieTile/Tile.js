import React from 'react';
import classes from './Tile.module.css';
import {Link} from "react-router-dom";
import StarRateIcon from '@mui/icons-material/StarRate';

const IMAGE_PATH="https://image.tmdb.org/t/p/original/";

const Tile = props => {
    return (
        <Link style={{textDecoration:"none"}} to='/movieDetail'>
            <div className={classes.movie_tile}>
                <img className={classes.movie_bg} src={`${IMAGE_PATH}${props.movie.backdrop_path || props.movie.poster_path}`} />

                <div className={classes.movie_info}>
                    <h3>{props.movie.original_title || props.movie.title}</h3>
                    <span>
                        <span>
                            <StarRateIcon style={{color:"#f9d71c", display:"inline-block", verticalAlign:"middle"}} />
                        </span>
                        <span className={classes.rating}>
                            {props.movie.vote_average}
                        </span>
                    </span>

                </div>
            </div>
        </Link>
    );
}

export default Tile; 