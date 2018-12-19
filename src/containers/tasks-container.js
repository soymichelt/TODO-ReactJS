import React, { Component } from 'react'

import Form from './../components/task-form'
import Template from './../components/template'
import Tasks from './../components/tasks'
import Social from './../components/social'

class TaskContainer extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        taskValue: '',
        tasks: [],
      };
    }
    
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
      tasks.push({
        task: taskValue,
        completed: false,
      });
      this.setState({
        taskValue: '',
        tasks,
      });
    };

    completedTask = (index) => {
      let { tasks } = this.state;
      tasks[index].completed = true;
      this.setState({
        tasks
      });
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
        alert("Elemento inválido");
      }
    };

    render() {
      const { taskValue } = this.state;
      return (
        <Template>
          <Form
            onTaskChange={this.handleTaskChange}
            onTaskKeyPress={this.handleTaskKeyPress}
            onAddClick={this.handleAddClick}
            value={taskValue}
            />
          <Tasks
            tasks={this.state.tasks}
            onRemoveItemClick={this.handleRemoveItemClick}
            onCompletedItemClick={this.handleCompletedItemClick}
            />
          <Social
            />
        </Template>
      );
    }
  }

  export default TaskContainer;