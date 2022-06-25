const { v4: uuidv4 } = require('uuid');
let data = require('../models/Flight');

let flights = data.flightModel;

exports.getFlight = (req, res) => {
    res.send(flights);
}

exports.createFlight = (req,res) => {
    const flight = req.body;

    flights.push({...flight,id:uuidv4()});

    res.send(`${flight.title} departing at ${flight.time}UTC added successfully!`);
}

exports.getSingleFlight = (req,res)=>{
    const {id} = req.params;
    
    const foundFlight = flights.find((flight) => flight.id === id);

    res.send(foundFlight);
}

exports.deleteFlight = (req,res)=>{
    const {id} = req.params;
    flights = flights.filter((flight) => flight.id !== id); 
    res.send(`Flight with id ${id} has been deleted successfully!`)
}

exports.updateFlight = (req,res) => {
    const {id} = req.params;
    const {title, time, price, date} = req.body;

    const flight = flights.find((flight) => flight.id === id);

    if(title) flight.title = title;

    if(time) flight.time = time;

    if(price) flight.price = price;

    if(date) flight.date = date;

    res.send(`Flight with id ${id} has been updated successfully!`);

}

