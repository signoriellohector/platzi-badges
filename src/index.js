import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, platzi Badges!</h1>;
// const element = React.createElement(
//   'a',
//   { href: 'https://platzi.com' },
//   'Ir a platzi'
// );
// const name = 'angela';
// const sum = () => 3 + 3;
// const jsx = <h1>Hola soy, {undefined}</h1>;
// const element = React.cr+eateElement('h1', {}, `Hola, soy ${name}`);
const jsx = (
  <div>
    <h1>Hola, soy Richard</h1>
    <p>Soy ingeniero Frontend.</p>
  </div>
);

const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Hola, soy Richard'),
  React.createElement('p', {}, 'Soy ingeniero de la Web.')
);
const container = document.getElementById('app');

// ReactDOM.render (__qué__, __dónde__);
ReactDOM.render(element, container);
