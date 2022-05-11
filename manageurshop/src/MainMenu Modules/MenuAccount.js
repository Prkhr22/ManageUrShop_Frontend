import React from "react";
import { Link, Router } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const MenuAccount = () => {
    return(
        <div>
            <Router>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/addSupplier" action>
                Add Supplier
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="/viewSupplier" action>
                View Supplier
            </Link>  
            <Link className="list-group-item list-group-item-action" tag="a" to="/addCustomer" action>
                Add Customer
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="/viewCustomer" action>
                View Customer
            </Link>  
        </ListGroup>
        </Router>
        </div>
    )
}

export default MenuAccount;