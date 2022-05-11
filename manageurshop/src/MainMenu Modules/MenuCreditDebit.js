import React from "react";
import { Link, Router } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const MenuCreditDebit = () => {
    return(
        <div>
            <Router>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/addCreditDebit" action>
                Add Credit / Debit 
            </Link>     
            <Link className="list-group-item list-group-item-action" tag="a" to="/viewCreditDebit" action>
                View Credit and Debit Details
            </Link>  
        </ListGroup>
        </Router>
        </div>
    )
}

export default MenuCreditDebit;