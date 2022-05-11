import React from "react";
import {Container,Button} from 'reactstrap';
import './Home.css';
const Home= () => {
    return(
        <div>
            <div className="Jumbotron" >
                <h1 className="display-6 text-center">
                Welcome to ManageUrShop Application
                </h1>
                <p>
                A web based portal for retailers, wholesalers where they can manage all the paperwork related to their shop.
                When user register their shop in the system they get various features like billing module, inventory management, credit and debit details, account details, tax calculation and can manage their regular customers.
                </p>
                <Container className="text-center">
                    <Button color="primary" outline>Start Using</Button>
                </Container>
            </div>
        </div>
    )
}

export default Home;