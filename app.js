var fs = require('fs');

var oio = require('orchestrate');
oio.ApiEndPoint = "api.aws-us-east-1.orchestrate.io";
var db = oio("df370b41-6b09-4789-ba8f-375940e84fe4");

console.log("Pride and Prejudice");

  
var content;
var theBook;
 

////this works for reading files and writing to database


// fs.readdir('PandPmaster', function (err, files){
// 	console.log("first things first");
// 	if (err) throw err;
//  	console.log("files are" + files);	 

//  	files.forEach(function(file, index){
// 		fs.readFile("PandPmaster/"+ file, {encoding: 'utf8'}, function read(err, data) {
//     	if (err) throw err;
//      	console.log(data);
//      	//theBook.push(data);

     		
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


db.search('PandPremote', 'chapterText: "nerves" ')
.then(function (result) {
  
  var content  = JSON.stringify(result.body);
  
  console.log('hello');

  console.log(content.match(/nerves/).size)
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


