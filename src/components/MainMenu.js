import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const MainMenus = () => {
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/inventory" action>
                Manage Inventory
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="/billing" action>
                Billing Module
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/creditdebit" action>
                Credit / Debit Details
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to ="/accounts" action>
                Account Management
            </Link>   
        </ListGroup>
    )
}

export default MainMenus;