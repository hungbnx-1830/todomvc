import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';



class App extends Component {
  constructor() {
    super();
    this.state = {
        todoItems: [
            { title: 'Công việc 1' , isComplete: true},
            { title: 'Công việc 2' , isComplete: true },
            { title: 'Công việc 3' , isComplete: false}
        ]
    }
  }
  changisComplete(item) {
    return (event) => {
        const isComplete = item.isComplete;
        const { todoItems } = this.state;
        const index = todoItems.indexOf(item);
        this.setState({
            todoItems: [
                ...todoItems.slice(0, index),
                {
                    ...item,
                    isComplete: !isComplete
                },
                ...todoItems.slice(index + 1)
            ]
        })
    }
  }
  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        {
          todoItems.length > 0 && todoItems.map((item ,index) =>
            <TodoItem
                key={index}
                item={item}
                onClick={this.changisComplete(item)} />)
        }
        {
          todoItems.length === 0 && 'Nothing here'
        }
      </div>
    );
  }
}

export default App;
