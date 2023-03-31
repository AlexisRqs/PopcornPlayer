import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NoPage from './components/pages/NoPage';
import HomePage from './components/pages/HomePage';
import FilmCategoriesPage from './components/pages/FilmsCategoriesPage';
import FilmPage from './components/pages/FilmPage';
import SearchPage from './components/pages/SearchPage';
import Banner from "./components/Banner1";
import NavBar from "./components/NavBar1";

function App() {
    return (
            <Router>
              <NavBar/>
                <Banner/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/categories" element={<FilmCategoriesPage/>}/>
                    <Route path="/movies/:id" element={<FilmPage/>}/>
                    <Route path="/search/movies/:title" element={<SearchPage/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </Router>
    );
}

export default App