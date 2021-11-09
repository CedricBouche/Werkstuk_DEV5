const express = require("express");
const PORT = 4000;
const server = express();



server.get("/", function(req,res){
  res.send("Hello");
});



server.listen(PORT,() =>{
  console.log(`server is listening on port ${PORT}`);
})





