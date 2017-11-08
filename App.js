/*
You're in charge of managing the development of the new TMDB mobile application. The deadline
is almost here, and your developer quits! You can tell the board that you can't deliver the 
project, or you can finish it yourself. Luckily, you took an awesome introduction to software
development course in b-school. You've got this.

To-do:

- When a movie title is entered into the text field, figure out how to capture the value that's
  typed in the state object.
- When the return key is pressed, use the value that's typed by the user to call the TMDB API 
  (already done), and store the first result in state. Pass this object (via props) to the Movie
  component (already written, but hard-coded), and display the movie's poster, backdrop, title,
  rating (average vote) and overview.

Hints:

- Read the React documentation on the TextInput component –
  https://facebook.github.io/react-native/releases/0.28/docs/textinput.html – pay particular 
  attention to the onChangeText (event that occurs when typing into the TextInput) and also
  onSubmitEditing (event that occurs when the user presses the return key) - write event handler
  functions for both!
- Styles are already written (in styles.js) and applied, so there's no need to modify them, unless
  you want to!
*/

import React from 'react';
import { Image, TextInput, Text, View } from 'react-native';
import styles from './styles';

class Movie extends React.Component {
  render() {
    return (
      <View style={styles.movie}>
        <Image style={styles.backdrop}
               source={{uri: "http://image.tmdb.org/t/p/w500/sy3e2e4JwdAtd2oZGA2uUilZe8j.jpg"}} />
        <View style={styles.posterContainer}>
          <Image style={styles.poster} 
                 source={{uri: "http://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg"}} />
        </View>
        <View style={styles.titleAndVotes}>
          <Text style={styles.title}>The Martian</Text>
          <Text style={styles.votes}>7.6</Text>
        </View>
        <Text style={styles.overview}>
          During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce
          storm and left behind by his crew. But Watney has survived and finds himself stranded 
          and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, 
          wit and spirit to subsist and find a way to signal to Earth that he is alive.
        </Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieNameInput: "",
      movie: null
    }
  }
  movieNameInputSubmitted() {
    // Make the TMDB API call, receive results. Leave the next two lines alone.
    let url = "http://api.themoviedb.org/3/search/movie?query=" + this.state.movieNameInput + "&api_key=8ad43d355fccbef40dc3527123bb25ff&language=en-US&page=1&include_adult=false";
    fetch(url).then(response => response.json()).then(json => {
      console.log(json);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.movieNameInput} 
                   placeholder="Enter a movie name!"
                   placeholderTextColor="#aaa" />
        {/*Conditionally show the Movie component, only if there's a movie in state (so not initially)*/}
        {this.state.movie && <Movie />}
      </View>
    );
  }
}
