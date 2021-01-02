import React from 'react'
import { Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContainerProducts from './components/Products/ContainerProducts';
import HomePage from './components/HomePage/HomePage';

import './App.scss';
function App() {
  return <div className='app'>
    <Header className='header' />
    <div className = 'wrapper'>
      <Route path='/Products' component={ContainerProducts} exact />
      <Route path='/Home' component={HomePage} exact />
    </div>
    <Footer />
  </div>
}

export default App;
