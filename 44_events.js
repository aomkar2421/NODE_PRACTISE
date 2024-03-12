const express = require("express")
const EventEmitter = require('events')
const app = express()
const event = new EventEmitter();

let count = 0;
event.on("countAPI",()=>{
    count++;
    console.log("Event Occured "+count)
})

app.get("/",(req,resp)=>{
    resp.send("API Called")
    event.emit("countAPI")
})

app.get("/update",(req,resp)=>{
    resp.send("Update API Called")
})

app.get("/search",(req,resp)=>{
    resp.send("Search API Called")
})

app.listen(5000)

