import React, { Component } from 'react';

import './Main.css';
import Form from '../Form';
import Tasks from '../Tasks/index';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if(!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if(tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;

    const newTasks = [...tasks];

    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      newTask: tasks[index],
      index,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;

    newTask = newTask.trim();

    if(newTask === '') return;
    if(tasks.indexOf(newTask) !== -1) return;

    if(index === -1) {
      const newTasks = [...tasks, newTask];

      this.setState({
        tasks: [...newTasks],
        newTask: '',
      });
    } else {
      tasks[index] = newTask;

      this.setState({
        tasks: [...tasks],
        newTask: '',
        index: -1,
      });
    }
  };

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Task Manager</h1>

        <Form handleSubmit={this.handleSubmit} newTask={newTask} handleChange={this.handleChange} />
        <Tasks handleDelete={this.handleDelete} handleEdit={this.handleEdit} tasks={tasks} />
      </div>
    );
  }
}
