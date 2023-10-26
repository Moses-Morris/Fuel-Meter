import React from "react";
import { Form, Button } from 'react-bootstrap';

const FuelForm = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Fuel Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter fuel amount" />
            </Form.Group>

            <Form.Group controlId="formBasicDistance">
                <Form.Label>Distance Covered</Form.Label>
                <Form.Control type="number" placeholder="Enter distance covered" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
}

export default FuelForm;