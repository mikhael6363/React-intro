'use strict';

// React;
// ReactDOM;

class Heading extends React.Component {
  // описали шаблон для интерфейса
  render() {
    const { titleForHeading, classNameForHeading, children } = this.props;
    return React.createElement(
      'h1',
      { title: titleForHeading, className: classNameForHeading },
      'Hello React',
      ...children
    );
  }
}

const reactElement1 = React.createElement(
  Heading,
  {
    titleForHeading: 'Element1',
    classNameForHeading: 'heading',
  },
  'str1',
  'str2',
  'str3',
  'str4'
); // об-т реакт комп-та

const reactElement2 = React.createElement(
  Heading,
  {
    titleForHeading: 'Element2',
    classNameForHeading: 'test-heading',
  },
  'test1',
  'test2'
);

ReactDOM.render(reactElement1, document.getElementById('root'));