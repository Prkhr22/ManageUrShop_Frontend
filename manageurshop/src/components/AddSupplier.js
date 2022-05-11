import React , { Fragment} from "react";
import { Form,FormGroup, Label,Input,Button,Container } from "reactstrap";

const AddSupplier=()=>{
    return <Fragment>
        <Form>
        <FormGroup>
            <Label for='SupplierId' >Supplier ID</Label>
            <Input 
                type="number" 
                placeholder=""
                name="SupplierId"
                id="SupplierId"
                readOnly
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
            <Label for='SupplierName' >Name of Supplier</Label>
            <Input 
                type="text" 
                placeholder="Supplier Name"
                name="SupplierName"
                id="SupplierName"
            />
            </FormGroup>
            <FormGroup>
            <Label for='ShopName' >Name of shop</Label>
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
export default AddSupplier