import React from 'react';
import ReactDOM from 'react-dom';
import 'style/init.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App.js'

ReactDOM.render(<Router>
    <Switch>
        <Route component={App} />
    </Switch>
</Router>, document.getElementById('root'));
