import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool,
        title: PropTypes.string.isRequired
    }),
    onclick: PropTypes.func
}

export default TodoItem;
