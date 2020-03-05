import React, { Component } from 'react';
//import { BrowswerRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './Header.jsx';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';


class MainContainer extends Component {
    render() {
    return (
       <div>
           <Router>
           <Route exact path="/">
              <Header />
            </Route>
           </Router>
       </div>
    )
}
};

export default MainContainer;