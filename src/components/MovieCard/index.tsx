import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";

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


export default function MovieCard({movie}: MovieCardProps) {
    const {title, overview, poster_path, id} = movie;
    const navigate = useNavigate();

    return (
        <Card sx={{maxWidth: 345, cursor: 'pointer'}} onClick={() => navigate(`/movies/${id}`)}>
            <CardMedia
                sx={{height: 500}}
                image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {overview}
                </Typography>
            </CardContent>
        </Card>
    );
}
