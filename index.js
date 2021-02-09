'use strict';

// React;
// ReactDOM;

const reactElement = React.createElement(
  'h1',
  { title: 'Hello React', className: 'heading'},
  'Hello React.js'
);

ReactDOM.render(reactElement, document.getElementById('root'));
