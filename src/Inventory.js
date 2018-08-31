import React from "react";
import InventoryItem from "./inventoryItem";
import InventoryHeader from "./inventoryHeader";

function Inventory(props) {
    return (
        <div className="inventory">
        <InventoryHeader />
        <div className="inventoryItems">
            {props.items.map((i, index) => {
                return (
                    <InventoryItem
                        name={i.item}
                        key={index}
                        handleAddClick={props.handleAddClick}
                    />
                );
            })}
        </div>
    </div>
    );
}


export default Inventory;
