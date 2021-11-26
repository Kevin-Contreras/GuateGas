var app = require("./app.js")
app.set("port",process.env.PORT || 3001)
app.listen(app.get("port"),function(){
  console.log("el servidor esta corriendo en el puerto "+app.get("port"))
})
