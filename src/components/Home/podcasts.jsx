import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Card, CardDeck } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../App.scss';

const Podcasts = () => {
  let podcastData = JSON.parse(localStorage.getItem('podcasts'));

  const formatStrLength = str => {
    return str.replace(/^(.{150}[^\s]*).*/, "$1...");     
  };

  return (
    podcastData ?
    <Row className='justify-content-center bg-dark'>        
        <CardDeck className='justify-content-center bg-dark my-3 d-flex'>
        {podcastData.map((podcast, index) => (          
          <ScrollAnimation key={podcast.title} animateIn="slideInUp" delay={`${index}` * 250} animateOnMount='false'>
          <Card className='mt-2 mb-2 podcastCard'>
            <Link to={`/podcast/${podcast.title}`}><Card.Img className='home_podcast_logo' variant='top' src={podcast.image.url} alt='podcast logo'/></Link>
            <Card.Body>
              <Card.Text>
                {formatStrLength(podcast.description)}
              </Card.Text>            
            </Card.Body>
          </Card>
          </ScrollAnimation> 
        ))}
        </CardDeck>         
    </Row> : <p className='text-white'>Loading, please wait</p>
  ); 
}; 

export default Podcasts;
