import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';

const App = () =>{
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={ProductListing} />
                    <Route path="/product/:productId" exact component={ProductDetail} />
                    <Route>404 Not Found!</Route>
                </Switch>
            </Router>
        </div>
    );
};
export default App;