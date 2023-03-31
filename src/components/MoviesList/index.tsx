import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MovieCard from '../MovieCard';

interface Movies {
    page: number;
    results: Array<any>;
    total_pages: number;
    total_results: number;
}

interface MoviesProps {
    movies: Movies | null;
}

export default function MoviesList({movies}: MoviesProps) {
    const moviesList = () => {
        return movies?.results.map(x =>
            <Grid item xs={4}>
                <MovieCard movie={x}/>
            </Grid>
        )
    }

    return (
        <Box sx={{width: '100%', paddingTop: 5}}>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                {moviesList()}
            </Grid>
        </Box>
    );
}