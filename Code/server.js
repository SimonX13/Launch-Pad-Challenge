var express = require('express');
var app = express();
const { MongoClient } = require("mongodb");
var ObjectId = require('mongodb').ObjectID;
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * This is an express app
 * MongoDB is used as the database
 * The name of the database is called : Launch
 * There are 3 collections: Menu, User
 * Express server is a sample example
 */

/**
 * Displaying the view of menu list 
 */
app.get('/menu',
    async function (req, res) {
        const result =  await client.db("Launch").collection("Menu").find({}).sort({ _id: 1 }).toArray();
        res.json(result);
});

/**
 * Place an order from the munu
 */
app.post('/menu/order',
    async function (req, res) {
        const username = req.body.username;
        var orders = {
            food: ["xxx pizza", "yyy pizza"],
            drinks: ["uuu drink"]
        }
        try{
            const result =  await client.db("Launch").collection("user").updateOne(
                { _id : username},
                {$set: {"current_order.items": orders }}
            )
            res.status(201);
        }catch(e){
            console.log(e);
        }
        
});
/**
 * Update an existing order from the menu
 */
app.put('/menu/order/update',
    async function (req, res) {
        const username = req.body.username;
        const newOrders = req.body.newOrders;
        var orders = {
            food: ["xxx pizza", "yyy pizza"],
            drinks: ["uuu drink"]
        }
        try{
            const result =  await client.db("Launch").collection("user").updateOne(
                { _id : username},
                {$set: {"current_order.items": newOrders }}
            )
            res.status(200);
        }catch(e){
            console.log(e);
        }
});
/**
 * Remove a order from the shopping cart
 */
app.delete('/menu/order/delete',
    async function (req, res) {
        const username = req.body.username;
        try{
            const result =  await client.db("Launch").collection("user").updateOne(
                { _id : username},
                {$set: {}}
            )
            res.status(200);
        }catch(e){
            console.log(e);
        }
});


/**
 * Retrieve the a current order status 
 */
app.get('/order/status',
    async function (req, res) {
        res.json({});
});


/**
 * Retrieve the most recent one year order receipt 
 */
app.get('/receipts',
    async function (req, res) {
        //sorted in descending most recent order
        const result =  await client.db("Launch").collection("Receipt").find({}).sort({ "receipt.date": -1}).toArray();
        var list = []
        var currentDate = new Date();
        var oneYearAgoDate = currentDate.setFullYear(currentDate.getFullYear() - 1);
        for(let i = 0 ; i < result.length; i++){
            if( result[i] < oneYearAgoDate ){
                break;
            }
            else{
                list.push(result[i])
            }
        }
        res.json(list);
});


/**
 * Setting up the server and connect to mongoDB
 */
async function run() {
    try {
        await client.connect();
        var server = app.listen(8080, (req, res) => {
            var host = server.address().address;
            var port = server.address().port;
        })
    } catch (err) {
        console.log("error")
        await client.close()
    }
}
run();