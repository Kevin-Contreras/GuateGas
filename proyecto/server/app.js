var express = require("express")
var router = require("./MVC/router/router.js")
var bodyParser = require("body-parser") 
var app = express()
var urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(urlencodedParser)
app.use(router)
module.exports = app