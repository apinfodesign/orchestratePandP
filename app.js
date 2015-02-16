var fs = require('fs');

var oio = require('orchestrate');
oio.ApiEndPoint = "api.aws-us-east-1.orchestrate.io";
var db = oio("df370b41-6b09-4789-ba8f-375940e84fe4");

console.log("Pride and Prejudice");

var content;
var theBook;
 

//this works for reading files and writing to database

//  fs.readdir('PandPmaster', function (err, files){
// 	console.log("first things first");
// 	if (err) throw err;
//  	console.log("files are" + files);	 

//  	files.forEach(function(file, index){
// 		fs.readFile("PandPmaster/"+ file, {encoding: 'utf8'}, function read(err, data) {
//     	if (err) throw err;
//      	console.log(data);
     	
//      	//theBook.push(data);

//     	//	// write to orchestrate db with put

// 	   //  	db.put('PandPremote', file, {
// 		  // 		"chapterText": data,
// 		  // 		"chapterNumber": index
// 	   // 			 })
// 				// .then(function (res) {
// 	  	// 		console.log(res.statusCode);
// 				// })
// 				// .fail(function (err) {});
// 		});
//  	})
// });

// db.search ('collection','query').......

db.search('PandPremote', 'value.chapterText: "nerves" ')
.then(function (result) {

	var content  = JSON.stringify(result.body);
	
  	console.log(content.length + " is the length of content");
	console.log( content + " is the content");
 	console.log('hello.....................');

//How to read the returned result object from search
var count = result.body.count;
var totalCount = result.body.total_count;
var results = result.body.results;
var resultsArray = result.body.results[0];
var resultsArrayPath = result.body.results[0].path;
var resultsArrayPathCollection = result.body.results[0].path.collection;
var resultsArrayPathKey = result.body.results[0].path.key;
var resultsArrayPathRef = result.body.results[0].path.ref;

var resultsArrayScore =   result.body.results[0].score;

console.log("**** results below *****");

console.log(count + " is count ");
console.log(totalCount + " is total_count");
console.log(results +" is results" );
console.log(resultsArray +" is resultsArray" );
console.log(resultsArrayPath +" is resultsArrayPath" );
console.log(resultsArrayPathCollection + " is resultsArrayPathCollection" );
console.log(resultsArrayPathKey + " is resultsArrayPathKey" );
console.log(resultsArrayPathRef + " is resultsArrayPathRef" );
console.log(resultsArrayScore + " is resultsArrayScore" );

console.log("**** results above *****");

console.log("----------");


console.log( result.body.results[0].path.key + " ...0 ");
console.log( result.body.results[0].score + " ...score ");
console.log( result.body.results[0].value.chapterText.length 
	+ " ...content ");

console.log("----------");

console.log( result.body.results[1].path.key + " ...1 ");
console.log( result.body.results[1].score + " ...score ");
console.log( result.body.results[1].value.chapterText.length 
	+ " ...content ");


console.log("----------");

console.log( result.body.results[2].path.key + " ...2 ");
console.log( result.body.results[2].score + " ...score ");
console.log( result.body.results[2].value.chapterText.length 
	+ " ...content ");

console.log("----------");

console.log( result.body.results[3].path.key + " ...3 ");
console.log( result.body.results[3].score + " ...score ");
console.log( result.body.results[3].value.chapterText.length 
	+ " ...content ");

console.log("----------");


results.forEach(function(index){
	console.log("forEach loop" + index);
	console.log( result.body.results[index].path.key + " index is " + index);
});




})

.fail(function (err) {});


//console.log(content);
 
 
// db.put('PandPall', 'wholeBook', {
//   "chapterText": chapterContent,
   
//  })
// .then(function (res) {
//   console.log(res.statusCode);
// })
// .fail(function (err) {});



// db.search('new3', 'value.hometown: "LA" ' )
// .then(function (res) {
//   console.log(JSON.stringify(res.body));

// })
// .fail(function (err) {});





// console.log("completed one put");


// db.get('new3', 'miles-user-id')
// .then(function (res) {
//   console.log(res.body);
// })
// .fail(function (err) {});



// console.log("completed one get");


// db.newPatchBuilder('new3', 'miles-user-id')
//   .add('favorite_food', "hotdogs")
//   .apply()
//   .then(function (result) {
 
// 	 console.log("inside patchbuilder result  ");

//    })
//   .fail(function (err) {
 
//    });


// console.log("completed one additional new item put");



// console.log("getting next");

// db.get('new3', 'miles-user-id')
// .then(function (res) {

// 	console.log("get function ");
//   console.log(res.body);
// })
// .fail(function (err) {});


// console.log("completed second get");


