import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Movie from './Movie'
import Popup from '../components/Popup'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))
const MovieList = ({movies, handleOpen}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {movies.map((movie, idx) => (
            <Movie handleOpen={handleOpen} key={idx} movie={movie} />
          ))}
        </Grid>
      </Grid>
    </div>
  )
}
export default MovieList
