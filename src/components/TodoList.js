import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {
    let listElements = props.props.map(function(element) {
        return <li key={element.id}>{element.text}</li>
    })
    return (
        <ul className={style.TodoList}>{listElements}</ul>
    )
}

export default TodoList;