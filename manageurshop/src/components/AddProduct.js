import React , { Fragment} from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
const AddProduct=()=>{
    return <Fragment>
        <h1>Fill Product Details</h1>
        <Form>
            <FormGroup>
            <Label for='ProductId' >ProductId</Label>
            <Input 
                type="number" 
                placeholder=""
                name="ProductId"
                id="ProductId"
            />
            </FormGroup>
            <FormGroup>
            <Label for='ProductName' >Product Name</Label>
            <Input 
                type="text" 
                placeholder=""
                name="ProductName"
                id="ProductName"
            />
            </FormGroup>
            <FormGroup>
            <Label for='SupplierId' >SupplierId</Label>
            <Input 
                type="number" 
                placeholder=""
                name="SuppliertId"
                id="SupplierId"
            />
            </FormGroup>
            <FormGroup>
            <Label for='QuantityReceived' >Quantity Received</Label>
            <Input 
                type="number" 
                placeholder="Add Quantity Received"
                name="QuantityReceived"
                id="QuantityReceived"
            />
            </FormGroup>
            <FormGroup>
            <Label for='ProductPricePerUnit' >Product Price / Unit</Label>
            <Input 
                type="number" 
                placeholder="Price/Unit"
                name="ProductPricePerUnit"
                id="ProductPricePerUnit"
            />
            </FormGroup>
            <FormGroup>
            <Label for='QuantityLeft' >Quantity Left</Label>
            <Input 
                type="number" 
                placeholder="Add Quantity Left"
                name="QQuantityLeft"
                id="QuantityLeft"
            />
            </FormGroup>
            <FormGroup>
          <Label for="GST">Select GST</Label>
          <Input type="select" name="GST" id="GST">
            <option type="number">5%</option>
            <option type="number">12%</option>
            <option type="number">18%</option>
            <option type="number">28%</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for='TotalPrice' >Total Price</Label>
            <Input 
                type="number" 
                placeholder=""
                name="TotalPrice"
                id="TotalPrice"
                readOnly
            />
            </FormGroup >
            <Container className="text-center"> 
            <Button color="success">Add Product</Button>
            <Button color="danger">Clear</Button>
            </Container>





        </Form>
    </Fragment>
}
export default AddProduct