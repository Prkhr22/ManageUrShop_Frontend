import React from "react";
import { Link, Router } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const MenuInventory = () => {
    return(
        <div>
            <Router>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/addProduct" action>
                Add Product
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="/viewProduct" action>
                View Product
            </Link>  
        </ListGroup>
        </Router>
        </div>
    )
}

export default MenuInventory;