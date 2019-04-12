import React from 'react';
import { Person, Name } from './functional-components';

export const App = () => (
  <>
    <Person ime={0 + 2} prezime="Perić" />
    <br />
    <Name ime="Časlav" />
    <br />
    <Person ime="Ivan" prezime="Ivić" />
  </>
);
