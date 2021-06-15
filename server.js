// Declare Express
// Step 1
const express = require ('express');
// Using All method of express inside server.
// Step 2
const server = express();

// Don't Forgot the instal npm i express
// Port Value : 
const PORT = 3001;

//Declre Weather.json
const weatheData = require('./asstes/weather.json');

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
server.get('/getWeather' , (req,res)=>{
    let latReq = req.query.lat;
    let lonReq = req.query.lon;
    let searchQueryReq = req.query.searchQuery;
    let data = weatheData.results.find(element => {
        if (element.lat == latReq && element.lon == element.lonReq && element.searchQuery == element.searchQueryReq){
            send.res(element);
        }
    });
})


server.listen(PORT,()=>{
    console.log(`I'm Listem on PORT : ${PORT}`);
})

// Build API Server : 