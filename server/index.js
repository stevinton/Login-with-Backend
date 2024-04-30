const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentModel = require("./models/student");

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/student")

app.post('/login', (req, res) =>{
    const {email, password} =  req.body;
    StudentModel.findOne({email: email})
    .then(user =>{
        if(user){
            if (user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        } else{
            res.json( "User not found")
        }
    })
})

app.post('/register', (req, res) =>{
    StudentModel.create(req.body).then(student => res.json(student)).catch(err => res.json(err))
})

app.listen(3000, () =>{
    console.log("The server is running")
})