import React, { Component } from "react";

class InventoryItem extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleAddClick(this.props.name);
    }
    render() {
        return (
            <div className="inventoryItem">
                <div className="inventoryItemName">{ this.props.name }</div>
                <button className="addInventoryItem" onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default InventoryItem;
