import React from "react";
import { ToDo } from "./ToDo";
import { BrowserRouter, Route } from "react-router-dom";
import Details from "./Details"

export const App = () => (
  <>
    <BrowserRouter>
      <Route exact path="/" component={ToDo} />
      <Route path="/details" component={Details} />
      <ToDo />
    </BrowserRouter>
  </>
);
