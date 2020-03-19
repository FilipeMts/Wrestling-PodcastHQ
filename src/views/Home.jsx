import React, { useEffect } from 'react';
import Banner from '../components/Home/banner';
import Podcasts from '../components/Home/podcasts';
import '../App.scss';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Podcasts />
    </>
  );
};

export default Home;
