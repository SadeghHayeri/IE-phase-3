import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'

import MainPage from './components/main-page';
import SearchPage from './components/search-page'
import AccountPage from './components/account'
import HouseLeafPage from "./components/house-leaf";
import AddHousePage from "./components/add-house";
import { ToastContainer } from 'react-toastify';

import './components/common/sass/app.scss';
import BindingService from './services/binder';
import Auth from './services/auth';

class App extends Component {

    componentDidMount() {
        Auth.getUser((user) => {
            BindingService.signal('AuthChange', user);
        }, (error) => {
            BindingService.signal('AuthChange', null);
        });
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path="/search" component={SearchPage}/>
                    <Route path="/house/:owner/:id" component={HouseLeafPage}/>
                    <Route path="/account" component={AccountPage}/>
                    <Route path="/add-house" component={AddHousePage}/>
                    {/* when none of the above match, <NoMatch> will be rendered */}
                    {/*<Route component={NoMatch}/>*/}
                </Switch>
                <ToastContainer rtl />
            </div>
        );
    }
}

export default App;