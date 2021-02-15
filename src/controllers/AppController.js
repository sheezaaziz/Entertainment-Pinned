import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import LeftMenu from '../sections/LeftMenu/LeftMenu';
import MainPage from '../sections/MainPage/MainPage';
import RightMenu from '../sections/RightMenu/RightMenu';

export default function GetMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieSearch, setMovieSearch] = useState('');
  const [count, setCount] = useState(0);
  const [nominations, setNominations] = useState([]);
  const [message, setMessage] = useState('');

  let increment = 0;

  const getMovies = async (movieSearch, pageNum, movieList) => {
    pageNum += 1;

    let res = await getResults(movieSearch, pageNum);
    if (res.Response !== 'True') {
      return movieList;
    }
    res.Search.forEach((movie) => {
      movieList.push(movie);
      increment += 1;
    })
    // if next page response is true then push movies again.
    return getMovies(movieSearch, pageNum, movieList);
  }

  const getResults = async (movieSearch, pageNum) => {
    const config = { params: {'s': movieSearch, 'page': pageNum} };
    let res = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_KEY}`, config);
    return res.data;
  }

  useEffect(async() => {
    setLoading(true);
    let movies = await getMovies(movieSearch, 0, []);
    setCount(increment);
    if (movies === []) {
      setMovies([]);
    } else {
      setMovies(movies);
    }
    setLoading(false);
  }, [movieSearch]);

// title, subtitle, img, type, id
  const addNominee = (movieTitle, releaseYear, imgSrc, type, imdbID) => {
    if (nominations.length < 5) {
      let newNominations = [...nominations, {Title: movieTitle, Year: releaseYear, Poster: imgSrc, Type: type, imdbID: imdbID}];
      setNominations(newNominations);
    }
    if (nominations.length == 4) {
      setMessage("Congrats, you have added 5 nominations! Please consider sharing your nominations list.");
    }
  }

  const disabled = (imdbID) => {
    console.log(imdbID);
    return nominations.find(nomination => nomination.imdbID ===  imdbID) !== undefined;
  }

  const removeNominee = (imdbID) => {
    setMessage("");
    let newNominations = nominations.filter(
      (nominee) => nominee.imdbID !== imdbID
    );
    setNominations(newNominations);
  }

  const Container = styled.div`
    display: flex;
    height: 100vh;
  `;

  return (
    <Container>
      <LeftMenu/>
      <MainPage querySearch={movieSearch} setQuerySearch={setMovieSearch} count={count} results={movies} loading={loading} addToList={addNominee} disabled={disabled}></MainPage>
      <RightMenu cards={nominations} removeFromList={removeNominee} message={message}/>
    </Container>
  )
}
