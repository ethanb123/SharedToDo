import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import '../index.css'

const CreateList = (props: any) => {
    return (
        <div className="bodycss">
            <h1>Create a List</h1>
            <Form>
                <FormGroup>
                    <Label for="inputList">Enter the Lists's Name</Label>
                    <Input name="list" id="inputList" placeholder="Enter List Name" />
                </FormGroup>
            </Form> 
        </div>
    );
}

export default CreateList;