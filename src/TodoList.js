import React, { Component } from "react";
import ListItem from "./ListItem";
import NewItem from "./NewItem";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {content: "React practice", done: true},
                {content: "game time", done: false}
            ]
        };
    }

    addNewItem = (newItemContent) => {
        const newList = [...this.state.todoList, {content: newItemContent, done:false}];
        this.setState({
            todoList: newList
        });
    } 

    render() {
        // const todoList = [
        //     {content: "React practice", done: true},
        //     {content: "game time", done: false}
        //   ];
        
        return  (
            <div>
                {
                    this.state.todoList.map( item => <ListItem item={item}/>)
                }
                <NewItem addNewItem={this.addNewItem}/>
            </div>
        );
    }
}

export default TodoList;