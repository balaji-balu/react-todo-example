import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    console.log('delete this task');
  }
  
  render() {
    let that = this;
    let list = this.props.toDoList.map(function(todo) {
      return (
        <Todo key={todo.id} todo={todo} />
      );
    });
    return (
      <div>
        <h3>TodoList Component</h3>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default TodoList;