import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Faq from './Faq';
import Navigation from './Navigation';
import Tickets from './Tickets';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route path="/home" component={Home} exact/>
                    <Route exact path="/about" component={About}/>
                    <Route path="/tickets" component={Tickets} />
                    <Route path="/faq" component={Faq} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;