import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import {
  Home
} from 'react-pages';
import project from './project';
import task from './task';
function routerFormat(commentsPath){
  return commentsPath
}

export default  ()=>{
  return (
      <Switch>
       
        <Route path="/news" component={Home} />
        {project()}
        {task()}
      </Switch>
  );
}


	
