// 
import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import axios from 'axios';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

interface Film {
  original_title: string;
}

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<Film[]>([]);
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_TMDB_API;
    const apiKey = process.env.REACT_APP_TMDB_API_APIKEY;
    axios
      .get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${inputValue}`)
      .then((res) => {
        setOptions(res.data.results.slice(0, 10));
      });
  }, [inputValue]);

  const onClickListItem = (title: string) => {
    setInputValue(title);
    setOptions([]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOptions([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleSuggestions = () => {
    if (options.length === 0 || options[0].original_title === inputValue) {
      return
    }
    return (
      <List
      style={{
        backgroundColor: 'white',
        cursor: 'pointer',
        position: 'absolute',
        width: 400,
      }}
    >
      {options.map((option) => (
        <ListItem
          onClick={() => onClickListItem(option.original_title)}
          className="ListItem"
          key={option.original_title}
        >
          {option.original_title}
        </ListItem>
      ))}
    </List>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div style={{ position: 'relative', width: '100%' }} ref={ref}>
        <TextField
          placeholder="Entrez un titre de film"
          value={inputValue}
          onChange={handleInputChange}
          variant="outlined"
          style={{ backgroundColor: 'white', width: 400 }}
        />
        {handleSuggestions()}
        <Button
          onClick={() => navigate(`/search/movies/${inputValue}`)}
          variant="contained"
          sx={{
            p: '2px 40px',
            borderRadius: '20px',
            backgroundColor: '#53D251',
            marginLeft: 2,
            height: '55px',
          }}
        >
          Rechercher
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
