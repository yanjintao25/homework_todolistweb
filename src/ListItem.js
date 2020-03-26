import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component{
    constructor(props) {
        super(props);
        this.state = { done: this.props.item.done};
    }

    onPClick = () => {

        this.setState({
           done: true 
        });
    }

    render() {
        const item = this.props.item;
        if (this.state.done) {
            return <p className="done-item">{item.content}</p>;
        } else {
            return <p onClick={this.onPClick}  className="item">{item.content}</p>;
        }
    }
}

export default ListItem;