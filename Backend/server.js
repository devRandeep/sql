const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    password: '',
    user:'root',
    database:'user',
})
app.get('/student', (re,res)=> {
    // return res.json("Backend");
    const sql = "SELECT * FROM students";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get('/', (re,res)=> {
    return res.json('From Backend');
})
app.listen(2024, ()=>  {
    console.log("listen");
})