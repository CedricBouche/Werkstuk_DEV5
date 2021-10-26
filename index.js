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

