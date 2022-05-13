import React from "react";
import { Link, Router } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const MenuAccount = () => {
    return(
        <div>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/accounts/addSupplier" action>
                Add Supplier
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="/accounts/viewSupplier" action>
                View Supplier
            </Link>  
            <Link className="list-group-item list-group-item-action" tag="a" to="/accounts/addCustomer" action>
                Add Customer
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="/accounts/viewCustomer" action>
                View Customer
            </Link>  
        </ListGroup>
        </div>
    )
}

export default MenuAccount;