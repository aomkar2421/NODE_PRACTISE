const express = require('express');
const App = express()

App.get( '/', (req , resp) =>{
    resp.send(`
        <h1>Home Page</h1>
        <a href="/">Go To Home Page</a> <br/>
        <a href="/about">Go To About Page</a>
        <a href="/json">Go To Json Page</a>
        <a href="/html">Go To Html Page</a>
    `)
} )

App.get( '/json', (req , resp) =>{
    resp.send([
        {
            name :'omkar',
            ae : 21
        },
        {
            name :'avi',
            ae : 20
        },
        {
            name :'adiraj',
            ae : 22
        },
        {
            name :'ankita',
            ae : 22
        }
    ])
} )

App.get( '/html', (req , resp) =>{
    resp.send(`
        <h1>HTML PAGE</h1>
        <a href="/">Go To Home Page</a>
    `)
} )

App.get( '/about', (req , resp) =>{
    resp.send("About Page")
} )

App.listen(4501)