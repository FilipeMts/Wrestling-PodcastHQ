import React from 'react';
import { Row } from 'react-bootstrap';
import '../../App.scss';

export default function banner() {
  return (
    <Row className='homeContainer'>
      <div className='background'></div> 
      <div className='bg-dark rounded text-align-center text-white p-3 intro'>
        <h3>Welcome to the<br /> Wrestling Podcast HQ</h3>
        <p>home of the best wrestling podcasts</p>
      </div>      
    </Row>
  );
};
