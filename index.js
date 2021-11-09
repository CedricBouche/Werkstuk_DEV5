const express = require("express");
const PORT = 3000;
const server = express();



server.get("/footbal/movie", function(req,res){
  res.send("Hello");
});

server.put("/", function(req,res){
  res.send("Hello");
});

server.delete("/", function(req,res){
  res.send("Hello");
});

server.listen(PORT,() =>{
  console.log(`server is listening on port ${PORT}`);
})

