import React, { Component } from 'react'

import Form from './../components/task-form'
import Template from './../components/template'
import Tasks from './../components/tasks'
import Social from './../components/social'
import Message from './../components/message'

class TaskContainer extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        taskValue: '',
        tasks: [],
        showMessage: false,
        message: '',
        searchValue: '',
      };
    }

    handleSearchChange = (event) => {
      this.setState({
        searchValue: event.target.value,
      });
    };
    
    handleTaskChange = (event) => {
      this.setState({
        taskValue: event.target.value,
      });
    };

    handleTaskKeyPress = (event) => {
      if(event.key === 'Enter') {
        this.addTask();
      }
    };

    handleAddClick = () => {
      this.addTask();
    };

    handleCompletedItemClick = (index) => {
      this.completedTask(index);
    };
    
    handleRemoveItemClick = (index) => {
      this.remove(index);
    };

    addTask = () => {
      let { tasks, taskValue } = this.state;
      if(taskValue) {
        tasks.push({
          task: taskValue,
          completed: false,
        });
        this.setState({
          taskValue: '',
          tasks,
        });
        this.showMessage("Added task");
      }
    };

    completedTask = (index) => {
      let { tasks } = this.state;
      tasks[index].completed = true;
      this.setState({
        tasks
      });
      this.showMessage("!Cool¡ Task completed");
    };

    remove = (index) => {
      if(index > -1) {
        let { tasks } = this.state;
        tasks.splice(index, 1);
        this.setState({
          tasks,
        });
      }
      else {
        this.showMessage("La tarea no se puede remover porque es inválida");
      }
    };

    showMessage = (message) => {
      this.setState({
        showMessage: true,
        message,
      });
    };

    closeMessage = () => {
      this.setState({ showMessage: false, message: '' });
    };


    filterTasks = (searchValue, tasks) => {
      if(searchValue === '') {
        return tasks;
      }
      else {
        return tasks.filter((item) => {
          return item.task.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        });
      }
    };
    render() {
      const {
        taskValue,
        tasks,
        showMessage,
        message,
        searchValue
      } = this.state;

      
      return (
        <Template>
          <Form
            onTaskChange={this.handleTaskChange}
            onTaskKeyPress={this.handleTaskKeyPress}
            onAddClick={this.handleAddClick}
            value={taskValue}
            />
          <Tasks
            searchValue={searchValue}
            onSearchChange={this.handleSearchChange}
            tasks={this.filterTasks(searchValue, tasks)}
            onRemoveItemClick={this.handleRemoveItemClick}
            onCompletedItemClick={this.handleCompletedItemClick}
            />
          <Social
            />
          <Message
            showMessage={showMessage}
            message={message}
            onClose={this.closeMessage}
            />
        </Template>
      );
    }
  }

  export default TaskContainer;