import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LeftMenu from '../sections/LeftMenu/LeftMenu';
import MainPage from '../sections/MainPage/MainPage';
import MainPageStill from '../sections/MainPage/MainPageStill';
import RightMenu from '../sections/RightMenu/RightMenu';
import MobileNav from '../components/MobileNav/MobileNav';

export default function GetMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieSearch, setMovieSearch] = useState('');
  const [count, setCount] = useState(0);
  const [nominations, setNominations] = useState([]);
  const [saved, setSaved] = useState([]);
  const [countSaved, setCountSaved] = useState(0);
  // quick temp fix. unsure why it has to be an array.
  const [notif, setNotif] = useState([]);

  let increment = 0;
  const types = {'Nominations': nominations, 'Saved': saved};

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
      // bc can not call constructNotification and have it create new notif directly from here. unsure why... D;
      setNotif(['add'])
    }  else {
      setNotif(['still']);
    }
  }

  const addSave = (movieTitle, releaseYear, imgSrc, type, imdbID) => {
    let newSaved = [...saved, {Title: movieTitle, Year: releaseYear, Poster: imgSrc, Type: type, imdbID: imdbID}];
    setSaved(newSaved);
    setCountSaved(countSaved + 1);
  }

  const disabled = (imdbID, group) => {
    return types[group].find(t => t.imdbID ===  imdbID) !== undefined;
  };

  const removeItem = (imdbID, group) => {
    let newList = types[group].filter(
      t => t.imdbID !== imdbID
    );
    switch(group) {
      case 'Nominations':
        setNominations(newList);
        break;
      case 'Saved':
        setSaved(newList);
        setCountSaved(countSaved - 1);
        break;
      default:
        break;
    }
  }

  const notify = () => {
    // bc unsure why it doesn't work when it's not an array. :(
    if (notif[0] === 'add') {
      constructNotification('Pinned successfully.', 'success');
    } else if (notif[0] === 'still') {
      constructNotification('Sorry, you can not have more than 5 pins :( Try to save something instead.', 'danger');
    } else if (notif[0] === 'remove') {
      constructNotification('Unpinned :o Don\'t worry, you can save, or add this back anytime.', 'warning');
    }
  }

  const constructNotification = (message, type) => {
    store.addNotification({
      message: message,
      type: type,
      insert: "bottom",
      container: "bottom-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        showIcon: true,
      }
    });
  }

  useEffect(async() => {
    notify();
  }, [notif]);

  const getPost = () => {
    let post = 'Check out my pinned entertainment list:\n';
    nominations.forEach((nomination) => {
      post += `${nomination.Title}\n`;
    })
    post += '\nUse sheezaaziz.com to pin and save your favourite digital entertainment sources.';
    return post;
  }

  const postInfo = {
    'facebook': {
      'url': 'sheezaaziz.com',
      'post': getPost(),
      'hashtag': '#EntertainmentPinned'
    },
    'twitter': {
      'url': ' ',
      'post': getPost(),
      'hashtags': ['EntertainmentPinned']
    },
    'email': {
      'url': '',
      'subject': 'My Pinned Entertainment List',
      'post': getPost()
    }
  }

  const socialIcons = {'facebook': 'fab fa-facebook-f', 'twitter': 'fab fa-twitter', 'email': 'fas fa-paper-plane', 'link': 'fas fa-link'};

  const Container = styled.div`
    display: flex;
    height: 100vh;
  `;

  return (
    <Router>
      <MobileNav/>
      <Container>
        <ReactNotification/>
        <LeftMenu/>
        <Switch>
          <Route path="/home">
            <MainPage querySearch={movieSearch} setQuerySearch={setMovieSearch} count={count} results={movies} loading={loading} addToList={addNominee} disabled={disabled} removeItem={removeItem} title={'Home'} saveItem={addSave}></MainPage>
          </Route>
        </Switch>
        <Switch>
          <Route path="/saved">
            <MainPage count={countSaved} results={saved} loading={loading} addToList={addNominee} disabled={disabled} removeItem={removeItem} title={'Saved'} saveItem={addSave}></MainPage>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <MainPageStill title={'Project Guide'}></MainPageStill>
          </Route>
        </Switch>
        <Switch>
          <Route path="/contact">
            <MainPageStill title={'Contact'}></MainPageStill>
          </Route>
        </Switch>
        <RightMenu cards={nominations} removeItem={removeItem} socialIcons={socialIcons} postInfo={postInfo}/>
      </Container>
    </Router>
  );
}
