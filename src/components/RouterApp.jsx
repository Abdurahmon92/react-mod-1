import React from 'react';
import Game from '../navigationPage/Game';
import MainPage from '../mainPages/MainPages';
import Error from '../mainPages/Error';
import { Redirect, Route, Switch} from 'react-router-dom';
import { routes } from '../router/Route';

function RouterApp(props) {
    return (
        <>
          <Switch>
            {routes.map(route=>(
              <Route
                  path = {route.path} 
                  component = {route.component}
                  exact = {route.exact}
              /> 
            ))}
            <Redirect to="/error"/>
          </Switch>
            
        </>
    );
}

export default RouterApp;