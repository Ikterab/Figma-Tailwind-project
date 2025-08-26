import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import carData from '../Reusecode/cardata.json'

function Cardetails() {
    const { id } = useParams()
    const car = carData[id]
    if(!car) return <h2>Car not found</h2>
    
}



export default Cardetails