import React, { useEffect } from 'react';
//import xmlToJson from './data/data';
import { /* xmlToJson, */ myData } from './data/data';
import Home from './views/Home';
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

const tempData = myData;

function App() {

  let podcastData = [];
  useEffect(() => {
    console.log('use effect');
    /* const promises = urls.map(url => fetch(url).then(response => response.text()));
    Promise.all(promises).then(results => {
      //console.log(results)
      results.map(el => {
        const data = new window.DOMParser().parseFromString(el, "text/xml");
        const json = xmlToJson(data);
        
        return podcastData.push(json.rss.channel)
      }) 
  
    }); */
  }, [podcastData])

  console.log(tempData)

  return (
    <Container fluid className="App" >
      <Home />
    </Container>
  );
}

export default App;
