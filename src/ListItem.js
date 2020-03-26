import React, { Component } from "react";
import "./ListItem.css";

// const ListItem = (props) => (<p>{props.item.content}</p>);
const ListItem = (props) =>{
    const item = props.item;

    if (item.done) {
    return <p className="done-item">{item.content}</p>;
    } else {
        return <p className="item">{item.content}</p>;
    }
}

// class ListItem extends Component{
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (<p>{this.props.item}</p>);
//     }
// }

export default ListItem;