import React from "react";
//import './App.css';
import FuelForm from './FuelForm';
import AppNavbar from "./AppNavbar";
import FuelInfoCard from "./FuelInfoCard";

function App() {
    return (
        <div className="App">
            <AppNavbar />
            <div className="container">
                <FuelForm />
            <FuelInfoCard fuelAmount={50} distanceCovered={200} />
            </div>
        </div>
    );
}

export default App;