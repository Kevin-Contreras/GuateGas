var express = require("express")
var router = express.Router()


router.get("/",function(req,res,next){
  console.log(req.body.nombre)
  res.end("se grafico")
})
module.exports=router