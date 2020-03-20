import React, { useState, useEffect } from 'react';
import Home from './views/Home';
import Podcast from './views/Podcast';
import Footer from './components/Footer/footer';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.scss';

const App = props => {

  const [menu, setMenu] = useState({
    homeBtn: true,
    topArrow: false,
  });
  
  
  useEffect(() => {
    console.log('App - use effect');

    const showTopArrow = () => {
      console.log('showTopArrow')
      if (window.pageYOffset > 50) {
        setMenu({
          ...menu,
          topArrow: true
        })
      }
      else setMenu({...menu, topArrow: false})
      console.log(menu.topArrow, window.pageYOffset)
    };  

    window.addEventListener('scroll', showTopArrow);
    return () => window.removeEventListener('scroll', showTopArrow);;
  }, [menu, menu.topArrow]);


  const goTopHandler = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  };

  

  return (
  <Container fluid className="App" >
    {menu.homeBtn && props.history.location.pathname !== '/' && <Link to='/'>
      <div className='homeBtn-container'>
        <i className="fas fa-home homeBtn"></i>
     </div></Link>}
    {menu.topArrow && <div className='arrow-container' onClick={goTopHandler}>
      <i className="fas fa-chevron-circle-up arrow"></i>
    </div>}
    <main>
      <Switch>
        <Route path='/:name' render={() => <Podcast />}/>
        <Route path="/" exact render={() => <Home />} />     
      </Switch>    
    </main>
    <footer>
      <Footer />
    </footer>
  </Container>
  );
};

export default withRouter(App);
