import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {

    render() {
        return (
            <div className={style.TodoList}>
                {this.props.item[0].text}
                {this.props.item[1].text}
                {this.props.item[2].text}
            </div>
        );
        
    }
}

export default TodoList;