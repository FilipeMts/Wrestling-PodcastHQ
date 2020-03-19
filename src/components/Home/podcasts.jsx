import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Card, CardDeck } from 'react-bootstrap';
import { /* xmlToJson, */ myData } from '../../data/data';

import '../../App.scss';

const tempData = myData;

/* const urls = [
  'https://feeds.megaphone.fm/83-weeks', 
  'https://feeds.megaphone.fm/arn', 
  'https://feeds.megaphone.fm/grilling-jr', 
  'https://feeds.megaphone.fm/something-to-wrestle-with-bruce-prichard', 
  'https://feeds.megaphone.fm/WWO2089228444'
]; */

const Podcasts = props => {

  let podcastData = [];

  useEffect(() => {
    console.log('use effect');
    localStorage.setItem('podcasts', JSON.stringify(tempData))
    /* const promises = urls.map(url => fetch(url).then(response => response.text()));
    Promise.all(promises).then(results => {
      //console.log(results)
      results.map(el => {
        const data = new window.DOMParser().parseFromString(el, "text/xml");
        const json = xmlToJson(data);
        
        return podcastData.push(json.rss.channel)
      }) 
      localStorage.setItem('podcasts', podcastData)
  
    }); */
  }, [podcastData]);
  
  const formatStrLength = str => {
    return str.replace(/^(.{150}[^\s]*).*/, "$1...");     
  };

  return (
    <Row className='justify-content-center bg-dark '>   
      <CardDeck className='justify-content-center bg-dark col-12 my-3' /* style={{width: '100%'}} */>
      {tempData && tempData.map(podcast => (
        <Card key={podcast.title} className='mt-2 mb-2 podcastCard' style={{minWidth: '14em', maxWidth: '14em', border: 'none'}}>
          <Link to={`/${podcast.title}`}><Card.Img className='home_podcast_logo' variant='top' src={podcast.image.url} alt='podcast logo'/></Link>
          <Card.Body>
            <Card.Text>
              {formatStrLength(podcast.description)}
            </Card.Text>            
          </Card.Body>
        </Card>
      ))}
      </CardDeck>   
    </Row>
  );
};

export default Podcasts;
