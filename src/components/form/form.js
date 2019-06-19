import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' }
  }

  handleChange = (event) => {
    event.preventDefault();
    let name = event.target.value;
    this.setState({ name });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveNameToState(this.state.name);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}></input>
      </form>
    );
  }
}

export default Form;