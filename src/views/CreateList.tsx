import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
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
            <h2>Test Form</h2>
            <Form>
                <Label>Username</Label>
                <Input type="text"/>
                <Label> Passworld</Label>
                <Input type="password"/>
                <Button >Login</Button>
            </Form>
        </div>
    );
}

export default CreateList;