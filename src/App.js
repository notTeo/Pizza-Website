import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import allPizzaProducts from './components/PizzaProducts'
import DessertsProducts from './components/DessertsProducts'
import Contact from './components/Contact';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/pizzas" exact component={allPizzaProducts} />
        <Route path="/desserts" exact component={DessertsProducts} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={ Cart }/>
      </Switch>
      <Route path="/" exact component={Hero} />
      <GlobalStyle />
      <Route path="/" exact component={Products}>
        <Products heading='Choose your favorite' data={productData} />
      </Route>
      <Route path="/" exact component={Feature} />
      <Route path="/" exact component={Products}>
        <Products heading='Sweet Treats for You' data={productDataTwo} />
      </Route>
      <Route path="/" exact component={Footer} />
    </Router>
  ); 
}

export default App;