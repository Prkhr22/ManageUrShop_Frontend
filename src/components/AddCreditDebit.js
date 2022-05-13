import React , { Fragment} from "react";
import { Form,FormGroup, Label,Input,Button,Container } from "reactstrap";

const AddCreditDebit=()=>{
    return <Fragment>
        <Form>
        <FormGroup>
          <Label for="SearchId">Search Bill</Label>
          <Input type="search" name="searchId" id="SearchId" placeholder="Enter Bill/Product Id here" />
        </FormGroup>
        <FormGroup>
          <Label for="BillProductId">Bill Id / Product Id</Label>
          <Input type="select" name="GST" id="GST">
            <option type="text">BillId</option>
            <option type="text">ProductId</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for='CustSuppName' >Name of Customer / Supplier</Label>
            <Input 
                type="text" 
                placeholder=""
                name="CustSuppName"
                id="CustSuppName"
                readOnly
            />
            </FormGroup>
            <FormGroup>
            <Label for='CreditOrDebit' >Credit / Debit</Label>
            <Input 
                type="text" 
                placeholder=""
                name="CreditOrDebit"
                id="CreditOrDebit"
                readOnly
            />
            </FormGroup>
            <FormGroup>
            <Label for='CreDOrDebAmount' >Credited / Debited Amount</Label>
            <Input 
                type="number" 
                placeholder="Add the credit or debit amount"
                name="Quantity"
                id="Quantity"
            />
            </FormGroup>
            <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="Date of Transaction" />
        </FormGroup>
        <Container className="text-center"> 
            <Button color="success">Add Product</Button>
            <Button color="danger">Clear</Button>
            </Container>

        </Form>
    </Fragment>
}
export default AddCreditDebit