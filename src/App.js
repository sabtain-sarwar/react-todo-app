import React from 'react';
import Header from './components/layouts/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';


class App extends React.Component {

  state = {
    todos : [
      {
        id : uuid.v4(),
        title : 'Take out the trash',
        completed : false
      },
      {
        id : uuid.v4(),
        title : 'Dinner with Wife',
        completed : false
      },
      {
        id : uuid.v4(),
        title : 'Meeting with Boss',
        completed : false
      }
    ]
  }

  // Toggle Complete
  marksComplete = (id) => {
     this.setState({ todos: this.state.todos.map(todo => {
       if (todo.id === id) {
         todo.completed = !todo.completed
       }
       return todo;
     })})
  }


  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title, 
      completed:false
    }
    this.setState({ todos : [...this.state.todos , newTodo]});
  }

  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} marksComplete={this.marksComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
