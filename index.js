<<<<<<< HEAD
/**
 * Get the API
 * 
 * @param url - get the endpoint of the API
 * @returns a JSON file
 */

const api_url =
	"https://www.scorebat.com/video-api/v3/";

async function getapi(url) {
	
	const response = await fetch(url);
	
	var data = await response.json();
	console.log(data);
}

getapi(api_url);

=======
const express = require("express");
const server = express();
const PORT = 3000;

const owners = [{
  name: "hello",
  email: "hello@ehb.be"
}];

/**
 * [GET] /
 * returns "hello world" upon get request
 * @returns {object} with "message" param containing "hello world"
 */
server.get("/",(req, res) =>{
  res.send({message: "hello world"})
})

/**
 * [GET] /owner
 * @returns {Object} current owner object
 */
 server.get("/owner", (req, res) => {
  res.json(owner);
})

server.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
>>>>>>> fd77bc6b1922350b92113404f4302e584602faf7
