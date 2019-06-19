import React from 'react';
import ReactDOM from 'react-dom';

import Form from './components/form/form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ''
    };
  }

  saveNameToState = (name) => {
    let count = this.state.count + 1;
    this.setState({ name, count });
  }

  render() {
    return (
      <React.Fragment>
        <Form saveNameToState={this.saveNameToState} />
        <div>Name: {this.state.name}</div>
        <div># of Updates: {this.state.count}</div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
