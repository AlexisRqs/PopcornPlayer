import axios from 'axios';
import {useEffect, useState} from 'react';
import BasicPagination from '../../BasicPagination';
import MoviesList from '../../MoviesList';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

type Movies = {
    page: number;
    results: Array<any>;
    total_pages: number;
    total_results: number;
}

const HomePage = () => {
    const [movies, setMovies] = useState<Movies | null>(null);
    const [page, setPage] = useState(1);

    const handlePage = (page: number) => {
        setPage(page);
    }

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_TMDB_API;
        const apiKey = process.env.REACT_APP_TMDB_API_APIKEY;
        axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}&page=${page}`)
            .then((res) => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                setMovies(res.data)
                console.log(res.data)
            })
    }, [page])

    return (
        <>
            <CssBaseline/>
            <Container>
                <MoviesList movies={movies}/>
                <BasicPagination page={handlePage} numberPage={movies?.total_pages}/>
            </Container>
        </>
    );
};

export default HomePage;