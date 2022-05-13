import React from "react";
import { Link, Router } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const MenuInventory = () => {
    return(
        <div>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/inventory/addProduct" action>
                Add Product
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="/inventory/viewProduct" action>
                View Product
            </Link>  
        </ListGroup>
        </div>
    )
}

export default MenuInventory;