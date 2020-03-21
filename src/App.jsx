import React, { useState, useEffect } from 'react';
import Home from './views/Home';
import Podcast from './views/Podcast';
import ErrorPage from './views/ErrorPage';
import Footer from './components/Footer/footer';
import { xmlToJson, urls } from './data/data';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.scss';

const App = () => {
  const [menu, setMenu] = useState({
    homeBtn: true,
    topArrow: false,
  }); 

  const location = useLocation();

  useEffect(() => {
    let podcastData = [];
    const promises = urls.map(url => fetch(url).then(response => response.text()));
    Promise.all(promises).then(results => {
      results.map(el => {
        const data = new window.DOMParser().parseFromString(el, "text/xml");
        const json = xmlToJson(data);        
        return podcastData.push(json.rss.channel);
      })
      localStorage.setItem('podcasts', JSON.stringify(podcastData));
    });
  }, []);
  
  useEffect(() => {
    const showTopArrow = () => {
      if (window.pageYOffset > 50) {
        setMenu({
          ...menu,
          topArrow: true
        })
      }
      else setMenu({...menu, topArrow: false})
    };  

    window.addEventListener('scroll', showTopArrow);
    return () => window.removeEventListener('scroll', showTopArrow);    
  }, [menu, menu.topArrow]);

  const goTopHandler = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  };  

  

  return (
    <Container fluid className="App d-flex flex-column min-vh-100">
      {menu.homeBtn && location.pathname !== '/' && 
        <Link to='/'>
          <div className='homeBtn-container'>
            <i className="fas fa-home homeBtn"></i>
          </div>
        </Link>}

      {menu.topArrow && <div className='arrow-container' onClick={goTopHandler}>
        <i className="fas fa-chevron-circle-up arrow"></i>
      </div>}

      <main className='h-100'>
        <Switch>
          <Route path='/podcast/:name' render={() => <Podcast />} />
          <Route path='/error' component={ErrorPage} />
          <Route path="/" exact render={() => <Home />} />     
          <Route path="*" exact render={() => <ErrorPage />} /> 
        </Switch>    
      </main>

      <footer>
        <Footer />
      </footer>
    </Container>
  );
};

export default App;
