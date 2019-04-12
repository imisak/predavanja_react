import React from 'react';
import { Person, Name } from './functional-components';

export const App = () => (
  <>
    <Person firstName={0 + 2} lastName="Perić" />
    <br />
    <Name ime="Časlav" />
    <br />
    <Person firstName="Ivan" lastName="Ivić" />
  </>
);
