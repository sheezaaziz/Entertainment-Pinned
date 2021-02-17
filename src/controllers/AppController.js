import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

import LeftMenu from '../sections/LeftMenu/LeftMenu';
import MainPage from '../sections/MainPage/MainPage';
import RightMenu from '../sections/RightMenu/RightMenu';

export default function GetMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieSearch, setMovieSearch] = useState('');
  const [count, setCount] = useState(0);
  const [nominations, setNominations] = useState([]);
  // quick temp fix. unsure why it has to be an array.
  const [notif, setNotif] = useState([]);

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
      // bc can not call addSuccessNotif fcn and have it create new notif directly from here. unsure why...
      setNotif(['add'])
    }  else {
      setNotif(['still']);
    }
  }

  const disabled = (imdbID) => {
    return nominations.find(nomination => nomination.imdbID ===  imdbID) !== undefined;
  }

  const removeNominee = (imdbID) => {
    let newNominations = nominations.filter(
      (nominee) => nominee.imdbID !== imdbID
    );
    setNominations(newNominations);
    setNotif(['remove']);
  }

  const notify = () => {
    // bc unsure why it doesn't work when it's not an array.
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

  const addSuccessNotif = () => {
    store.addNotification({
      title: "Sucess!",
      message: "You have successfully pinned an entertainment source.",
      type: "success",
      insert: "bottom",
      container: "bottom-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        showIcon: true,
      }
    });
  }

  const addUnsuccessNotif = () => {
    store.addNotification({
      title: "Unsuccessful!",
      message: "You have reached your pin limit.",
      type: "danger",
      insert: "bottom",
      container: "bottom-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        showIcon: true,
      }
    });
  }

  const addWarningNotif = () => {
    store.addNotification({
      title: "Warning!",
      message: "You have removed a pin.",
      type: "warning",
      insert: "bottom",
      container: "bottom-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
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

  let postInfo = {
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

  let socialIcons = {'facebook': 'fab fa-facebook-f', 'twitter': 'fab fa-twitter', 'email': 'fas fa-paper-plane', 'link': 'fas fa-link'};

  const Container = styled.div`
    display: flex;
    height: 100vh;
  `;

  return (
    <Container>
      <ReactNotification />
      <LeftMenu/>
      <MainPage querySearch={movieSearch} setQuerySearch={setMovieSearch} count={count} results={movies} loading={loading} addToList={addNominee} disabled={disabled} removeFromList={removeNominee}></MainPage>
      <RightMenu cards={nominations} removeFromList={removeNominee} socialIcons={socialIcons} postInfo={postInfo}/>
    </Container>
  )
}
