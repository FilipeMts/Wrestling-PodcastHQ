import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Card, CardDeck } from 'react-bootstrap';
import { /* xmlToJson, */ myData } from '../../data/data';
import './podcast.scss';

const tempData = myData;

export default function Podcasts() {

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

  const formatStrLength = str => {
    return str.replace(/^(.{150}[^\s]*).*/, "$1...");     
  };

  return (
    <Row className='justify-content-center'>   
      <CardDeck className='justify-content-center' /* style={{width: '100%'}} */>
      {tempData && tempData.map(podcast => (
        <Card key={podcast.title} className='mt-2 mb-2 podcastCard' style={{minWidth: '12em', maxWidth: '12em', border: 'none'}}>
          <Link to={`/${podcast.title}`}><Card.Img className='podcastLogo' variant='top' src={podcast.image.url} alt='podcast logo' style={{cursor: 'pointer'}}/></Link>
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
