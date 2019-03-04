import React from 'react';
import {Route} from 'react-router-dom';
import {
  Home
} from 'react-pages';


export default  ()=>{
  return (
        <Route exact path="/" component={Home} />
    );
}
