import React, { useContext, useEffect, useState } from 'react'
import classes from './Playlist.module.css'
import { moviesContext } from '../../context/Movies'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check';

const Playlist = () => {
    const context = useContext(moviesContext)
    const playlist = context[8]
    let storageData = JSON.parse(localStorage.getItem('playlist'))
    const setPlaylist = context[9]
    const [toWatch, setToWatch] = useState(true)
    const [toWatchList, setToWatchList] = useState(storageData?.length > 0 ? storageData.filter(item => item.status === 'to_watch') : [])
    const [watchedList, setWatchedList] = useState(storageData?.length > 0 ? storageData.filter(item => item.status === 'watched') : [])
    console.log(playlist)

    useEffect(() => {
        storageData = JSON.parse(localStorage.getItem('playlist'))
        setPlaylist(storageData?.length > 0 ? storageData : [])
        setToWatchList(storageData?.length > 0 ? storageData.filter(item => item.status === 'to_watch') : [])
        setWatchedList(storageData?.length > 0 ? storageData.filter(item => item.status === 'watched') : [])
        console.log(toWatchList)
    }, [])

    if (playlist.length === 0) {
        return (
            <div className={classes.empty}>
                Playlist empty
            </div>
        )
    }

    const movieWatched = (movieTitle) => {
        storageData.forEach(item => {
            if (item.title === movieTitle) {
                item.status = 'watched'
                setWatchedList(prev => [...prev, ...[item]])
            }
        })

        localStorage.setItem('playlist', JSON.stringify(storageData))
        setPlaylist(storageData)
        setToWatchList(prev => prev.filter(item => item.title !== movieTitle))
        console.log(storageData)
    }

    const deleteMovieToWatch = (movieTitle) => {
        let updateMovieData = toWatchList.filter(item => item.title !== movieTitle)
        let storageDataUpdate = storageData.filter(item => item.title != movieTitle)
        localStorage.setItem('playlist', JSON.stringify(storageDataUpdate))
        setPlaylist(storageDataUpdate)
        setToWatchList(updateMovieData)
    }

    const deleteMovieWatched = (movieTitle) => {
        let updatedMovieList = storageData.filter(item => movieTitle !== item.title)
        localStorage.setItem('playlist', JSON.stringify(updatedMovieList))
        setPlaylist(updatedMovieList)
        let updateWatchedMovieData = watchedList.filter(item => item.title !== movieTitle)
        setWatchedList(updateWatchedMovieData)
    }

    return (
        <div className={classes.playlist}>
            <h3> My Playlist </h3>
            <span className={classes.watch_button}>
                <button onClick={() => setToWatch(true)}> To Watch </button>
                <button onClick={() => setToWatch(false)}> Watched </button>
            </span>
            <div className={classes.cards}>
                {
                    toWatch ?
                    toWatchList.map(item => {
                        return (
                            <div className={classes.item}>
                                <img src={item.poster} alt='movie poster' />
                                <span> {item.title} </span>
                                <span className={classes.action_icons}>
                                    <DeleteIcon onClick={() => deleteMovieToWatch(item.title)}/>
                                    <CheckIcon onClick={() => movieWatched(item.title)}/>
                                </span>
                            </div>
                        )
                    })
                    :
                    watchedList.map(item => {
                        return (
                            <div className={classes.item}>
                            <img src={item.poster} alt='movie poster' />
                            <span> {item.title} </span>
                            <span className={classes.action_icons}>
                                <DeleteIcon onClick={() => deleteMovieWatched(item.title)}/>
                            </span>

                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Playlist