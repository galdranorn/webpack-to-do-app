import React from 'react';

class Title extends React.Component {
    /*constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }*/
    render() {
        return (
            <div className="title">
                <h1>To do list</h1>
                <h2>Tasks to do: {this.props.item.length}</h2>
            </div>
        );
    }
}

export default Title;