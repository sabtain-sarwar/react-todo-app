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
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}


// PropTypes
    // we've used an object bcz todo is an object
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired 
}

const colorStyle = {
    backgroundColor: 'blue'
}

export default TodoItem
