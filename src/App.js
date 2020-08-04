import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Footer from './Footer';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
