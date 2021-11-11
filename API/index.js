const express = require("express");
const PORT = 4000;
const server = express();


/**
 * [GET] test endpoint
 * @returns (string) "hello world" if server is active
 */

server.get("/", function(req,res){
  res.send("Hello");
});

server.delete("/",function(req,res){
  res.send("deleted");
})





server.listen(PORT,() =>{
  console.log(`server is listening on port ${PORT}`);
})





