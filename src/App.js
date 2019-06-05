import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import checked from './checked.svg';


class App extends Component {
  constructor() {
    super();
    this.state = {
        valueText:'',
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
  onKeyUp =(event)=> {
      let text = event.target.value;
      if (event.keyCode === 13) { //enter key
        if (!text) {
            return;
        }
        this.setState({
            valueText: '',
            todoItems:[
                {
                    title: text ,
                    isComplete: false
                },
                ...this.state.todoItems
            ]
        })
    }
  }
  onChange =(event)=> {
      let text = event.target.value;
      this.setState({
          valueText: text
      })
  }
  render() {
    const { todoItems, valueText } = this.state;
    return (
      <div className="App">
          <div className="todo-add">
              <img src={checked}/>
              <input
                  type="text"
                  placeholder="Add new item ..."
                  onKeyUp={this.onKeyUp}
                  value={valueText}
                  onChange={this.onChange}
              />
          </div>
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
