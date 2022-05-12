import React from "react";
import { Link, Router } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const MenuBills = () => {
    return(
        <div> 
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/billing/addBill" action>
                Add Bill
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="billing/viewBills" action>
                View Bills
            </Link>  
        </ListGroup>
        </div>
    )
}

export default MenuBills;