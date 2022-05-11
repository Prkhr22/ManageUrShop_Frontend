import React , { Fragment} from "react";
import { Form,FormGroup, Label,Input,Button,Container } from "reactstrap";

const AddCustomer=()=>{
    return <Fragment>
        <Form>
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
                readOnly
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
            <Label for='ShopName' >Name of Shop</Label>
            <Input 
                type="text" 
                placeholder="Shop Name"
                name="ShopName"
                id="ShopName"
            />
            </FormGroup>
            <Container className="text-center"> 
            <Button color="success">Add Product</Button>
            <Button color="danger">Clear</Button>
            </Container>

        </Form>
    </Fragment>
}

export default AddCustomer