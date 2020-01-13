import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        /* Let's do it by using ternary operator
        if(this.props.todo.completed) {
            return {
                textDecoration: "line-through"
            }
        } else {
            return {
                backgroundColor: 'red'
            }
        }*/
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {
        // Using de-structuring to pull out the varables from prop
        const { id , title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* { <input type="checkbox" onChange={this.props.marksComplete.bind(this , this.props.todo.id) } /> {''} }
                    {this.props.todo.title} */}
                    <input type="checkbox" onChange={this.props.marksComplete.bind(this,id) } /> {''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}


// PropTypes
    // we've used an object bcz todo is an object
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired 
}


const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    float: 'right'
}

export default TodoItem
