import {Box} from '@mui/material';
import MovieDetails from '../../MovieDetails';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

const FilmPage = () => {
    const [movie, setMovie] = useState<Movie | null>(null);
    let {id} = useParams();
    useEffect(() => {
        const apiUrl = process.env.REACT_APP_TMDB_API;
        const apiKey = process.env.REACT_APP_TMDB_API_APIKEY;
        axios.get(`${apiUrl}/movie/${id}?api_key=${apiKey}`)
            .then((res) => {
                setMovie(res.data)
                console.log(res.data)
            })
    }, [id])

    if (movie === null) {
        return (<div>Loading...</div>)
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <MovieDetails movie={movie}/>
        </Box>
    );
};

export default FilmPage;
