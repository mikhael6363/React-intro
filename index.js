'use strict';

// React;
// ReactDOM;
class Counter extends React.Component {
  constructor(props) {
    // пропсы только для чтения
    super(props);
    this.state = {
      counter: 0,
    };
    // this.decrement = this.decrement.bind(this); // 1 var
    // this.increment = this.increment.bind(this);
    // 2 var => use arrow functions in increment & decrement methods
  }
  increment = () =>
    this.setState(
      { counter: this.state.counter + 1 }
      // ++this.state.counter; // мутация состояния - very bad
    );
  decrement = () => {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState({
        counter: counter - 1,
      });
    }
  };

  render() {
    const { counter } = this.state;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('h1', null, counter),
      React.createElement(
        'button',
        {
          onClick: this.increment,
        },
        '+'
      ),
      React.createElement(
        'button',
        {
          onClick: this.decrement,
        },
        '-'
      )
    );
  }
}

const reactElement = React.createElement(Counter);

ReactDOM.render(reactElement, document.getElementById('root'));
