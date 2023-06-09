import axios from 'axios';
import {useEffect, useState} from 'react';
import BasicPagination from '../../BasicPagination';
import MoviesList from '../../MoviesList';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {useParams} from 'react-router-dom';

type Movies = {
    page: number;
    results: Array<any>;
    total_pages: number;
    total_results: number;
}

const SearchPage = () => {
    const [movies, setMovies] = useState<Movies | null>(null);
    const [page, setPage] = useState(1);
    let {title} = useParams();

    const handlePage = (page: number) => {
        setPage(page);
    }

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_TMDB_API;
        const apiKey = process.env.REACT_APP_TMDB_API_APIKEY;
        axios.get(`${apiUrl}/search/movie?api_key=${apiKey}&page=${page}&query=${title}`)
            .then((res) => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                setMovies(res.data)
            })
    }, [page, title])

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

export default SearchPage;