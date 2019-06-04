import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../success.png';
import checkComplete from '../success_check.png';

class TodoItem extends Component {

    render() {
        const {item, onClick} = this.props;
        let url = checkImg;
        if (item.isComplete) {
            url = checkComplete
        }
        return (
            <div

                className={classNames('todo-item', {
                'todo-item--complete': item.isComplete
            })}>
                <img
                    onClick={onClick}
                    src={url}
                    width={32}
                />
                <p>
                    {item.title}
                </p>
            </div>
        );
    }
}

export default TodoItem;
