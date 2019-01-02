import React from 'react';
import style from './TodoList.css';

const TodoList = (props, remove) => {
    let listElements = props.props.map(function(element) {
        return <li onClick={() => {remove(element.id)}} key={element.id}>{element.text}</li>
    })
    return (
        <ul className={style.TodoList}>{listElements}</ul>
    )
}

export default TodoList;