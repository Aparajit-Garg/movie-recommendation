import React from 'react';
import classes from './NavBar.module.css'

const NavBar = props => {

    const buttonClick = () => {
        console.log("clicked");
    }
    return (
        <div className={classes.navBar}>
            <h2 onClick={buttonClick}>Trending</h2>
            <h2 onClick={buttonClick}>Top Rated</h2>
            <h2 onClick={buttonClick}>Comedy</h2>
            <h2 onClick={buttonClick}>Horror</h2>
            <h2 onClick={buttonClick}>Action</h2>
            <h2 onClick={buttonClick}>SciFi</h2>
            <h2 onClick={buttonClick}>Mystery</h2>
            <h2 onClick={buttonClick}>Romance</h2>

        </div>
    );
}

export default NavBar;