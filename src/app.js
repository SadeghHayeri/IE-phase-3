import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'

import MainPage from './components/main-page';
import SearchPage from './components/search'
import AccountPage from './components/account'
import HouseLeafPage from "./components/house-leaf";
import AddHousePage from "./components/add-house";

import './components/common/sass/app.scss';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path="/search" component={SearchPage}/>
                <Route path="/house/:owner/:id" component={HouseLeafPage}/>
                <Route path="/account" component={AccountPage}/>
                <Route path="/add-house" component={AddHousePage}/>
                {/* when none of the above match, <NoMatch> will be rendered */}
                {/*<Route component={NoMatch}/>*/}
            </Switch>
        );
    }
}

export default App;