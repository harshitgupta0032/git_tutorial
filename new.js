var arr = ['A','B','C','D','E'];
for( var k in arr ){
	console.log( arr[k] ); 
}

console.log("newcommit")

var jsondata = require("./config.json");
console.log(jsondata.username);
console.log(jsondata.password);
