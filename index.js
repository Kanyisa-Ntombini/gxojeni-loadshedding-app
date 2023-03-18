import React from 'react';
import { ReactDOM } from 'react';

// const React = require('react');
// const ReactDOM = require('react-dom');

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));
console.log('hello')

const cottageLife = (
   <ul>
      <li>flowers</li>
      <li>herbs</li>
      <li>trees</li>
   </ul>
);

ReactDOM.render(cottageLife, document.getElementById('rural'));