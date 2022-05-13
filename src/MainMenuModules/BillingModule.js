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
        <h1>ManageUrBills</h1>
        <MenuBills/>    
      </div>
    );
  }
  
  export default BillingModule