import {Button, InputBase, Paper} from "@mui/material";
import './SearchBar.css';

export default function SearchBar() {
    return (
        <div className="SearchBar">
            <Paper
                component="form"
                sx={{p: '2px 2px 2px 14px', display: 'flex', alignItems: 'center', width: 900, borderRadius: '20px'}}
            >

                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Rechercher un film, une émission télévisée, un artiste..."
                    inputProps={{'aria-label': 'SearchBar'}}
                />
                <Button variant="contained"
                        sx={{p: '8px 40px', borderRadius: '20px', backgroundColor: '#53D251'}}
                >Rechercher</Button>

            </Paper>
        </div>
    )
}