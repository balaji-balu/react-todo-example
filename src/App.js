import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

let todoList = [
  { /* task 1 */
    id: '1',
    name: 'integration with module 1',
    done: false
  },
  { /* task 2 */
    id: '2',
    name: 'complete course on React',
    done: false
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <AddTodo/>
        <TodoList toDoList={todoList}/>
      </div>
    );
  }
} 

export default App;