// import {Button, InputBase, Paper} from "@mui/material";
// import './SearchBar.css';

// export default function SearchBar() {
//     return (
//         <div className="SearchBar">
//             <Paper
//                 component="form"
//                 sx={{p: '2px 2px 2px 14px', display: 'flex', alignItems: 'center', width: 900, borderRadius: '20px'}}
//             >

//                 <InputBase
//                     sx={{ml: 1, flex: 1}}
//                     placeholder="Rechercher un film, une émission télévisée, un artiste..."
//                     inputProps={{'aria-label': 'SearchBar'}}
//                 />
//                 <Button variant="contained"
//                         sx={{p: '8px 40px', borderRadius: '20px', backgroundColor: '#53D251'}}
//                 >Rechercher</Button>

//             </Paper>
//         </div>
//     )
// }


import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import axios from 'axios';
import './SearchBar.css'

interface Film {
  original_title: string;
}

const suggestions: Film[] = [
  { original_title: 'Apple' },
  { original_title: 'Banana' },
  { original_title: 'Cherry' },
  { original_title: 'Durian' },
  { original_title: 'Eggplant' },
];

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<Film[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_TMDB_API;
    const apiKey = process.env.REACT_APP_TMDB_API_APIKEY;
    axios.get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${inputValue}`)
    .then((res) => {
        setOptions(res.data.results.slice(0, 10))
    })
  }, [inputValue]);

  const onClickListItem = (title: string) => {
    setInputValue(title);
    setOptions([]);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <div style={{position: 'relative'}}>
      <TextField
      placeholder='Entrez un titre de film'
        value={inputValue}
        onChange={handleInputChange}
        variant="outlined"
        style={{backgroundColor: 'white', width: 400}}

      />
      {options.length > 0 && <List style={{backgroundColor: 'white', cursor: 'pointer', position: 'absolute', width: 400}}>
        {options.map((option) => (
          <ListItem onClick={() => onClickListItem(option.original_title)} className='ListItem' key={option.original_title}>{option.original_title}</ListItem>
        ))}
      </List>}
      </div>
    </div>
  );
};

export default SearchBar;

