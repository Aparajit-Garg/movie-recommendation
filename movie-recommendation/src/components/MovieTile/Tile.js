import React, { useContext, forwardRef } from 'react';
import classes from './Tile.module.css';
import {Link} from "react-router-dom";
import StarRateIcon from '@mui/icons-material/StarRate';
import { moviesContext } from '../../context/Movies';
const IMAGE_PATH="https://image.tmdb.org/t/p/original/";

const Tile = forwardRef((props, ref) => {

    const [,,,,movieId, setMovieId] = useContext(moviesContext);

    const handleClick = () => {
        console.log("movie id: ", props.movie.id);
        setMovieId(props.movie.id);
    }


    return (
        <Link style={{textDecoration:"none"}} to='/movieDetail'>
            <div ref={ref} onClick={handleClick} className={classes.movie_tile}>
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
)

export default Tile; 