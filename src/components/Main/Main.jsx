import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**
 * Components.
 */
import Nav from '../Nav/Nav';
import Head from '../Head/Head';

/**
 * Views.
 */
import Home from '../../views/Home';
import Hotels from '../../views/Hotels';
import Notifications from '../../views/Notifications';
import Payments from '../../views/Payments';
import Settings from '../../views/Settings';

const Main = () => {
    return(
        <Router>
            <div className="container">
                <Nav />
                <section className="wMax1000 panel flex-one pl12em pr12em pt12em">
                    <Head />
                    <div className="containerCenter">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/hotels' component={Hotels} />
                            <Route exact path='/notifications' component={Notifications} />
                            <Route exact path='/payments' component={Payments} />
                            <Route exact path='/search' component={Hotels} />
                            <Route exact path='/settings' component={Settings} />
                        </Switch>
                    </div>
                </section>
            </div>
        </Router>
    );
};

export default Main;
