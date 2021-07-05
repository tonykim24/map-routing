// JavaScript for the homepage example index.html
// Add a current year to the footer
const footerYear = document.querySelector("#year");
const API_KEY = '<api goes here>';


    
const GOLDEN_GATE_BRIDGE = {lng: -122.47483, lat: 37.80776};
 

// function search(){
// 	tt.services.fuzzySearch({
// 	    key: API_KEY,
// 	    query: 'pizza'
// 	})
// 	.go()
// 	.then(function(result) {
// 	    console.log(result);
// 		map = tt.map({
// 			key: API_KEY,
// 			container: 'map-div',
// 			center: response.results[0].position,
// 		});
// 	});
// };


function getTime(){
	const date = new Date(),
		yyyy = date.getFullYear();
		
	footerYear.innerHTML = `${yyyy}`;
}