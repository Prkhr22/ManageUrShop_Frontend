import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Button, Col, Container,Row } from 'reactstrap';
import { ListGroup, ListGroupItem } from "reactstrap";
import { BrowserRouter as Router,Routes, Route, Switch,Link } from 'react-router-dom';
import Header from "../components/Header";
import MenuInventory from "./MenuInventory";
import AddProduct from "../components/AddProduct";
import ViewProduct from "../components/ViewProduct";
import Home from "../components/Home";
import MenuBills from "./MenuBills";
import AddBills from "../components/AddBills";
import ViewBill from "../components/ViewBills";
const BillingModule=()=>{
    return (
      <div >
        <ToastContainer />
        <Container>
          <Header/>
          <Row>
            <Col md={3}>
            <MenuBills/>
            </Col>
            <Col md={9}>
            <Routes>
            <Route path="/" component={Home} exact/>
            <Route path="/addBill" component={AddBills} exact/>
            <Route path="/viewBills" component={ViewBill} exact/>
            </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default BillingModule