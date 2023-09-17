import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask } = this.state;
    return (
      <div className="main">
        <h1>Task Manager</h1>

        <form action="#">
          <input onChange={this.setTask} type="text" />
          <button type="submit">Create task</button>
        </form>

        <div>
          <h2>{newTask}</h2>
        </div>
      </div>
    );
  }
}
