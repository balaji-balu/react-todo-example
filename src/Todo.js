import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {done: false}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log('task clicked', this.state.done);
    this.setState({done: !this.state.done});   
  }
  
  render() {
    return (
      <li className={this.state.done?'done': ''} onClick={this.handleClick}>
        {this.props.todo.name}
      </li>
    );
  }           
}

export default Todo;