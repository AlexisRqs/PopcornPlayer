import {Box, Typography,} from '@mui/material';

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

interface MovieCardProps {
    movie: Movie;
}


const MovieDetails = ({movie}: MovieCardProps) => {
    const {backdrop_path, original_language, overview, release_date, title,} = movie;
    console.log("sdfsdfs", movie)

    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/w780/${backdrop_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Box sx={{width: '80%', backgroundColor: 'rgba(0,0,0,0.7)', p: 2}}>
                <Typography gutterBottom variant="h3" component="div" sx={{color: 'white'}}>
                    {title}
                </Typography>
                <Typography variant="h5" sx={{color: 'white'}}>
                    Overview:
                </Typography>
                <Typography variant="body1" sx={{color: 'white'}}>
                    {overview}
                </Typography>
                <Typography variant="h5" sx={{color: 'white'}}>
                    Original language:
                </Typography>
                <Typography variant="body1" sx={{color: 'white'}}>
                    {original_language}
                </Typography>
                <Typography variant="h5" sx={{color: 'white'}}>
                    Release date:
                </Typography>
                <Typography variant="body1" sx={{color: 'white'}}>
                    {release_date}
                </Typography>
            </Box>
        </Box>
    );
};

export default MovieDetails;
