import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useLocation, useParams, Redirect } from 'react-router-dom';
import '../App.scss';


const Podcast = () => {
  
  const { name } = useParams()
  const podcastTitles = JSON.parse(localStorage.getItem('podcasts')).map(podcast => podcast.title);
  console.log(name)
  
  const playerRef = useRef();
  const location = useLocation();
  
  const [allPodcasts] = useState(JSON.parse(localStorage.getItem('podcasts')) || null);
  const [audioSrc, setAudio] = useState(null);
  const currentPage = location.pathname.replace('/podcast/', '');
  const listenToPodcast = allPodcasts.filter(el => el.title === currentPage);
  
  useEffect(() => {
    console.log('Podcast - use effect')
    window.scrollTo(0, 0);
  }, []);

  
  const formatUrl = url => {
    return url.replace('https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/8G441/traffic', 'https://dcs');
  };

  const formatStrLength = str => {
    return str.replace(/(\r\n|\n|\r)/gm," ").replace(/^(.{400}[^\s]*).*/, "$1...");     
  };

  const playHandler = (url) => {
    setAudio(url);
    window.scrollTo({top: playerRef.current.offsetTop, behavior: 'smooth'});
  };
  
  return (
    podcastTitles.includes(name) ? 
    <>
      {listenToPodcast &&      
        <Row className='podcast_background'>    
          <Col className='align-self-center'> 
          <img src={listenToPodcast[0].image.url} className='rounded mx-auto d-block' width={250} alt='podcast logo' />
          </Col>
          <Col className='text-white mr-md-5'>
          <h1 className='mt-3'>{listenToPodcast[0].title}</h1>
          <p className='font-weight-bold text-justify'>{listenToPodcast[0].description}</p>
          <figure className='d-flex justify-content-center' ref={playerRef}>
            <audio 
              autoPlay
              controls
              src={audioSrc}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
          </Col> 
        </Row>}        
      
        <Row className='bg-dark justify-content-center'>
          {listenToPodcast[0].item.slice(0, 5).map(el => {
            return <Card key={el.title} className='mt-2 mb-2 bg-dark text-white border-bottom border-warning podcastCard' style={{minWidth: '100%', maxWidth: '100%', border: 'none'}}>
                    <Row className='m-0'>
                      <div className='col-md-3 align-self-center podcast_logo'  onClick={() => playHandler(formatUrl(el.enclosure['@attributes'].url))} title='play'>
                        <img className='mx-auto d-block' src={/* el['itunes:image'] ? el['itunes:image']['@attributes'].href : */ listenToPodcast[0].image.url} alt='logo' style={{width: '40%'}}  />                        
                        <p className='text-center mt-1 play'>play</p>
                      </div> 
                      <Card.Body className='col-md-9'>
                        <h4>{el.title}</h4>
                        <Card.Text className='p-1'>
                          {formatStrLength(el['itunes:summary'])}
                        </Card.Text>            
                      </Card.Body>  
                      </Row>  
                    </Card>}
          )}
          <p className='text-white'>Listen to all episodes and podcasts at <a href='https://www.westwoodone.com' target='_blank' rel='noopener noreferrer'>Westwood One</a></p>
        </Row> 
        </>
       : <Redirect to='/error' />  
  );
};

export default Podcast;
