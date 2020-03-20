import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Header'
import Menu from './Menu'
import Share from './Share'

import Home from './../Pages/Home'
import Deaths from './../Pages/Deaths'
import Recovered from './../Pages/Recovered'
import Cases from './../Pages/Cases'
import Informations from './../Pages/Informations'
import NoMatch from './../Pages/NoMatch'

const DirectionPage = () => {
    return (
        <Router>
            <div className="container">
                <Header />
                <Menu />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/deaths" component={Deaths} />
                    <Route path="/recovered" component={Recovered} />
                    <Route path="/cases" component={Cases} />>
                    <Route path="/informations" component={Informations} />
                    <Route component={NoMatch} />
                </Switch>
                <Share />
            </div>
        </Router>
    )
}

export default DirectionPage