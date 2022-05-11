import React from "react";
import { Link, Router } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const MenuBills = () => {
    return(
        <div>
            <Router>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/addBill" action>
                Add Bill
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="/viewBills" action>
                View Bills
            </Link>  
        </ListGroup>
        </Router>
        </div>
    )
}

export default MenuBills;