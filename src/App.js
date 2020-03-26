import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoList from './TodoList'
import ListItem from './ListItem';

class App extends Component {
  // constructor() {}
  
  render(){
    // const todoList = [
    //   "React practice",
    //   "game time"
    // ];
    return (
      <div className="App">
        <TodoListHeader />
        <TodoList />
        {/* {
          todoList.map( item => <p>{item}</p>)
        } */}
      </div>
    );
  }
}

// function App() {
  
  
// }

export default App;
