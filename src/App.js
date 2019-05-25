import React, { Component } from 'react';
import Todos from './Todos'
import AddForm from './AddForm'
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy Milk' },
      { id: 2, content: 'Feed the Dog' },
      { id: 3, content: 'Goto Gym' }
    ],
    open: false
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos: todos,
      open: true
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div>
        <Container maxWidth="sm">
            <h1>TODO APP</h1>
            <AddForm addTodo={this.addTodo} />
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </Container>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={1000}
          onClose={this.handleClose}
          message={<span id="message-id">Item Deleted!</span>}
        />
      </div>
    );
  }
}

export default App;
