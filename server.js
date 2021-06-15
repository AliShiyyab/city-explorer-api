// Declare Express
// Step 1
const express = require ('express');
// Using All method of express inside server.
// Step 2
const server = express();

// Don't Forgot the instal npm i express
// Port Value : 
const PORT = 3001;
const cors = require('cors');
//Declre Weather.json
const weather = require('./asstes/weather.json');
server.use(cors());
// localHost:3001/test
// Arrow function have 2 arguments:
// request (الي وصلني),response(الي بدي ابعثه)
server.get('/test', (req,res)=>{
    res.send('First Test Route.');
})

// OR

server.get('/', (req,res)=>{
    res.send('Just / :)');
})

// OR uses any thing ?

/*server.get('*', (req,res)=>{
    res.status(404).send('Any thing ');
})*/

// Import Wather.Json (getWeather)
// localHost:3001/getWeather
/*server.get('/getWeather' , (req,res)=>{
    let latReq = req.query.lat;
    let lonReq = req.query.lon;
    let searchQueryReq = req.query.searchQuery;
    let data = weatheData.data.find(element => {
        if (element.lat == latReq && element.lon == element.lonReq && element.searchQuery == element.searchQueryReq){
            res.send(element);
        }
    });
})*/

server.get('/getWeather' , (req,res)=>{
    const arrOfData = weather.data.filter(data => new Weather(data));
    res.send(arrOfData);
})

class Weather{
    constructor(data){
        this.date = data.valid_data;
        this.description = data.weather.description;
    }
}


server.listen(PORT,()=>{
    console.log(`I'm Listem on PORT : ${PORT}`);
})

// Build API Server : 