import React from 'react';
import Home from './views/Home';
import Podcast from './views/Podcast';
import Footer from './components/Footer/footer';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.scss';

const App = () => (
  <Container fluid className="App" >
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

export default App;
