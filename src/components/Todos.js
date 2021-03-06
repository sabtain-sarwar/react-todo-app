import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  render() {
      //console.log(PropTypes);
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} marksComplete={this.props.marksComplete} delTodo={this.props.delTodo} />
    )); 
  }
}

// PropTypes
// We've used an array bcz todos is an array of object
Todos.propTypes = {
    todos : PropTypes.array.isRequired ,
    marksComplete : PropTypes.func.isRequired ,
    delTodo : PropTypes.func.isRequired 
}

export default Todos;
