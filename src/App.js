import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import cart from './components/pages/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductState from './context/products/productState';
const App = () => {
  return (
    <ProductState>
      <Router>
        <div className='App'>
          <Header />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Cart' component={cart} />
            </Switch>
          </div>
        </div>
      </Router>
    </ProductState>
  );
};

export default App;
