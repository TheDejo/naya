import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import '../App.css';

import Header from './Header_footer/header/header';
import Footer from './Header_footer/footer';
import Home from './Home';

class Layout extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path ="/" exact component={Home} />
        <Footer /> 
      </Router>
    )
  };
};

export default Layout;