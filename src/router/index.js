import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import React, {Component} from 'react'
import NotFound from './../components/NotFound/NotFound.jsx'
import Main from './../components/Main/Main.jsx'
import Other from './../components/Other/Other.jsx'
export default class RouterComponent extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/other" component={Other}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}