import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    render() {
        return (
            <div className={style.Title}>
                <h1>To do list</h1>
                <h2>Tasks to do: {this.props.item.length}</h2>
            </div>
        );
    }
}

export default Title;