import React, { useEffect } from 'react';
//import xmlToJson from './data/data';

import Home from './views/Home';
import Footer from './components/Footer/footer';
import { Container } from 'react-bootstrap';
import './App.scss';

// Photo by Malte Wingen on Unsplash ---> give credits
// https://unsplash.com/photos/PDX_a_82obo

/* const urls = [
  'https://feeds.megaphone.fm/83-weeks', 
  'https://feeds.megaphone.fm/arn', 
  'https://feeds.megaphone.fm/grilling-jr', 
  'https://feeds.megaphone.fm/something-to-wrestle-with-bruce-prichard', 
  'https://feeds.megaphone.fm/WWO2089228444'
]; */



const App = () => (
  <Container fluid className="App" >
    <Home />
    <Footer />
  </Container>
);


export default App;
