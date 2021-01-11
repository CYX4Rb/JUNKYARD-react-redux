import React from 'react'
import { Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContainerProducts from './components/Products/ContainerProducts';
import HomePage from './components/HomePage/HomePage';

import './App.scss';
import ContainerAuthorization from './components/Authorization/ContainerAuthorization';


function App() {
  return <div className='app'>
    <Header className='header' />
    <div className = 'wrapper'>
      <Route path='/Products' component={ContainerProducts} exact />
      <Route path='/' component={HomePage} exact />
      <Route path='/authorized' component={ContainerAuthorization} exact />
    </div>
    <Footer />
  </div>
}

export default App;
