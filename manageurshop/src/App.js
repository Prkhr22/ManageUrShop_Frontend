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
import AddSupplier from './components/AddSupplier';
import AddCustomer from './components/AddCustomer';
import MainMenus from './components/MainMenu';
import InventoryManagement from './MainMenu Modules/InventoryManagement';
import BillingModule from './MainMenu Modules/BillingModule';
import CreditDebitModule from './MainMenu Modules/CreditDebitModule';
import AccountModule from './MainMenu Modules/AccountModule';
import ViewProduct from './components/ViewProduct';
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
            <Home/>
            <Routes>
            <Route path="/" component={Home} exact/>
            <Route path="/inventory" component={InventoryManagement} exact/>
            <Route path="/billing" component={BillingModule} exact/>
            <Route path="/creditdebit" component={CreditDebitModule} exact/>
            <Route path="/accounts" component={AccountModule} exact/>
            </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
