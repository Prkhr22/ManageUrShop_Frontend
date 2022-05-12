import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Switch,Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Col, Container,Row } from 'reactstrap';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import AddBills from './components/AddBills';
import AddCreditDebit from './components/AddCreditDebit';
import ViewCreditDebit from './components/ViewCreditDebit';
import AddSupplier from './components/AddSupplier';
import AddCustomer from './components/AddCustomer';
import ViewCustomer from './components/ViewCustomer';
import ViewSupplier from './components/ViewSupplier';
import MainMenus from './components/MainMenu';
import InventoryManagement from './MainMenuModules/InventoryManagement';
import BillingModule from './MainMenuModules/BillingModule';
import CreditDebitModule from './MainMenuModules/CreditDebitModule';
import AccountModule from './MainMenuModules/AccountModule';
import ViewProduct from './components/ViewProduct';
import MenuInventory from './MainMenuModules/MenuInventory';
import ViewBills from './components/ViewBills';

function App() {

  const btnHandle=()=> {
    toast.success("done",{ position: 'top-center'});
  }
  return (
    <div >
      <Router>
      <ToastContainer />
      <Container>
        <Header/>
        <Row>
          <Col md={3}>
          <MainMenus/>
          </Col>
          <Col md={9}>
            {/* <Home/> */}
            <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route exact path="/inventory" element={<InventoryManagement />} />
            <Route path="/billing" element={ <BillingModule />} exact/>
            <Route path="/creditdebit" element={<CreditDebitModule/>} exact/>
            <Route path="/accounts" element={<AccountModule/>} exact/>
            <Route path="/inventory/addProduct" element={<AddProduct/>} exact/>
            <Route path="/inventory/viewProduct" element={<ViewProduct/>} exact/>
            <Route path="/billing/addBill" element={<AddBills/>} exact/>
            <Route path="/billing/viewBills" element={<ViewBills/>} exact/>
            <Route path="/creditdebit/addCreditDebit" element={<AddCreditDebit/>} exact/>
            <Route path="/creditdebit/viewCreditDebit" element={<ViewCreditDebit/>} exact/>
            <Route path="/accounts/addSupplier" element={<AddSupplier/>} exact/>
            <Route path="/accounts/viewSupplier" element={<ViewSupplier/>} exact/>
            <Route path="/accounts/addCustomer" element={<AddCustomer/>} exact/>
            <Route path="/accounts/viewCustomer" element={<ViewCustomer/>} exact/>
            </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
