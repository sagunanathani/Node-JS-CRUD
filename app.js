const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// alag folder banavi to mukvu pade
const student = require('./Routes/routes');
app.use('/', student);

const mongoUrl = "mongodb://127.0.0.1:27017/student";
console.log("connection done");
mongoose.connect(mongoUrl, {useUnifiedTopology: true}).then(() => {
    console.log('success');
}).catch(e => {
    console.error("e--->",e);
    process.exit(1);
});

// // const user = require("./Models/studentDetails");
// mongoose.connect("mongodb://localhost:27017/student");
// console.log("connection done");

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     res.send("post the method")
// });
//
// // For invalid routes for post
// app.post('*', (req, res) => {
//     res.send('404! This is an invalid URL.');
// });

// GET method route
// app.get('/',(req,res)=>{
//     console.log("request send");
//     res.send("GET requests and in return send simple message as a response for client")
// });
//
// // a request for home page, it will only response with Home Page
// app.get('/home', (req, res) => {
//     res.send('as response of Home Page');
// });
//
// // For invalid routes
// app.get('*', (req, res) => {
//     res.send('404! This is an invalid URL.');
// });
//
// app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//     res.status(503).json({
//         success: false,
//         error: "server_error",
//     });
// });

app.listen(4000, () => {
    console.log(`Listening on port ${4000}`);
});

module.exports = app;