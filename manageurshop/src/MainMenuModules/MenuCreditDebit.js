import React from "react";
import { Link, Router } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const MenuCreditDebit = () => {
    return(
        <div>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/creditdebit/addCreditDebit" action>
                Add Credit / Debit 
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="/creditdebit/viewCreditDebit" action>
                View Credit and Debit Details
            </Link>  
        </ListGroup>
        </div>
    )
}

export default MenuCreditDebit;