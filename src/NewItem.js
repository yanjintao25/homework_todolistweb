import React, { Component } from "react";

class NewItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputContent: ""
        };
    }

    onInputChange = (event) => {
        // console.log(event);
        this.setState( {
            inputContent: event.target.value
        });

        // console.log(event.target.value);
    }

    onAddBtnClick = () => {
        this.props.addNewItem(this.state.inputContent);
        this.setState({
            inputContent: ''
        });
    }

    render() {
        return(
            <div>
                <input value={this.state.inputContent} onChange={this.onInputChange}/> 
                <button onClick={this.onAddBtnClick}>Add</button>
            </div>
        );
    }
}

export default NewItem;