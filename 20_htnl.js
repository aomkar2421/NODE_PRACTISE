const express = require('express')
const path = require('path')

const App = express();
const filePath = path.join(__dirname,'files')

App.use(express.static(filePath))

App.listen(4502)
