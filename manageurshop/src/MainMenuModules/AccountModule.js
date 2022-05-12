import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Button, Col, Container,Row } from 'reactstrap';
import { ListGroup, ListGroupItem } from "reactstrap";
import { BrowserRouter as Router,Routes, Route, Switch,Link } from 'react-router-dom';
import Header from "../components/Header";
import AddCustomer from "../components/AddCustomer";
import ViewCustomer from "../components/ViewCustomer"; 
import AddSupplier from "../components/AddSupplier";
import ViewSupplier from "../components/ViewSupplier";
import Home from "../components/Home";
import MenuAccount from "./MenuAccount";
const AccountModule=()=>{
    return (
      <div >
            <MenuAccount/>
      </div>
    );
  }
  
  export default AccountModule