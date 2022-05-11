import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Button, Col, Container,Row } from 'reactstrap';
import { ListGroup, ListGroupItem } from "reactstrap";
import { BrowserRouter as Router,Routes, Route, Switch,Link } from 'react-router-dom';
import Header from "../components/Header";
import Home from "../components/Home";
import AddCreditDebit from "../components/AddCreditDebit";
import ViewCreditDebit from "../components/ViewCreditDebit";
import MenuCreditDebit from "./MenuCreditDebit";

const CreditDebit=()=>{
    return (
      <div >
        <ToastContainer />
        <Container>
          <Header/>
          <Row>
            <Col md={3}>
            <MenuCreditDebit/>
            </Col>
            <Col md={9}>
            <Routes>
            <Route path="/" component={Home} exact/>
            <Route path="/addCreditDebit" component={AddCreditDebit} exact/>
            <Route path="/viewCreditDebit" component={ViewCreditDebit} exact/>
            </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default CreditDebit