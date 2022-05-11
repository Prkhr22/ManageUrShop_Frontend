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
const InventoryManagement=()=>{
    return (
      <div >
        <ToastContainer />
        <Container>
          <Header/>
          <Row>
            <Col md={3}>
            <MenuInventory/>
            </Col>
            <Col md={9}>
            <Routes>
            <Route path="/" component={Home} exact/>
            <Route path="/inventory/addProduct" component={AddProduct} exact/>
            <Route path="/inventory/viewProduct" component={ViewProduct} exact/>
            </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default InventoryManagement