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

/**
 * [DELETE] test endpoint
 * @returns (string) "deleted" if server is active
 */

server.delete("/",function(req,res){
  res.send("deleted");
})


/**
 * [PATCH] test endpoint
 * @returns (string) "updated" if server is active
 */

 server.patch("/",function(req,res){
  res.send("updated");
})




server.listen(PORT,() =>{
  console.log(`server is listening on port ${PORT}`);
})





