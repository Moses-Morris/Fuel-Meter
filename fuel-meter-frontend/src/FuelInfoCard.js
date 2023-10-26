import React from "react";
import { Card } from 'react-bootstrap';

const FuelInfoCard = ({ fuelAmount, distanceCovered }) => {
    return (
        <Card className="mt-4">
            <Card.Body>
                <Card.Title>Fuel Information</Card.Title>
                <Card.Text>
                    Fuel Amount: {fuelAmount} <br />
                    Distance Covered: {distanceCovered} <br />
                    Fuel Efficiency: {fuelAmount / distanceCovered}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FuelInfoCard;