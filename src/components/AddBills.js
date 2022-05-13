import React , { Fragment} from "react";
import { Form, FormGroup, Label, Button, Input, Container } from "reactstrap";
const AddBills=()=>{
    return <Fragment>
        <h1>Add Bills</h1>
        <Form>
            <FormGroup>
            <Label for='BillId' >Bill ID</Label>
            <Input 
                type="number" 
                placeholder="Bill Id"
                name="BillId"
                id="BillId"
            />
            </FormGroup>
            <FormGroup>
            <Label for='CustomerId' >Customer ID</Label>
            <Input 
                type="number" 
                placeholder="CustomerId"
                name="CustomerId"
                id="CustomerId"
            />
            </FormGroup>
            <FormGroup>
            <Label for='ShopId' >Shop ID</Label>
            <Input 
                type="number" 
                placeholder="Shop Id"
                name="ShopId"
                id="ShopId"
            />
            </FormGroup>
            <FormGroup>
            <Label for='CustomerName' >Name of Customer</Label>
            <Input 
                type="text" 
                placeholder="Customer Name"
                name="CustomerName"
                id="CustomerName"
            />
            </FormGroup>
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
            <Label for='Quantity' >Quantity </Label>
            <Input 
                type="number" 
                placeholder="Add Product Quantity"
                name="Quantity"
                id="Quantity"
            />
            </FormGroup>
            <FormGroup>
            <Label for='SPPerUnitWithoutGST' >Selling Price/Unit without GST</Label>
            <Input 
                type="number" 
                placeholder="Add Selling Price"
                name="SPPerUnitWithoutGST"
                id="SPPerUnitWithoutGST"
            />
            </FormGroup>
            <FormGroup>
          <Label for="GST">GST Applied</Label>
          <Input type="select" name="GST" id="GST">
            <option type="number">5%</option>
            <option type="number">12%</option>
            <option type="number">18%</option>
            <option type="number">28%</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for='PriceAfterGST' >Selling Price after GST applied</Label>
            <Input 
                type="number" 
                placeholder=""
                name="PriceAfterGST"
                id="PriceAfterGST"
                readOnly
            />
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
export default AddBills