import React from 'react';
import Todos from './components/Todos';
import './App.css';


class App extends React.Component {

  state = {
    todos : [
      {
        id : 1,
        title : 'Take out the trash',
        completed : false
      },
      {
        id : 1,
        title : 'Dinner with Wife',
        completed : false
      },
      {
        id : 1,
        title : 'Meeting with Boss',
        completed : false
      }
    ]
  }

  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
        <h1>Application</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
