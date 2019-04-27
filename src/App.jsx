import React from "react";
import { ToDo } from "./ToDo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./Details"
import { AppLayout } from './components';

export const App = () => (
  <BrowserRouter>
    <AppLayout>
      <Switch>
      <Route exact path="/" component={ToDo} />
      <Route exact path="/details" component={Details} />
      </Switch>
    </AppLayout>
  </BrowserRouter>
);