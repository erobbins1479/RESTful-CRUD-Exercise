var express = require('express');
var router = express.Router();

// Bring in the queries object that has all of the db query functions
var queries = require("../db/query")

// Create the route for get all
router.get('/', function(request, response, next) {
	queries.getAll()
	.then(function(cartoon) {
		response.json(cartoon)
	})
})

// Create the route for get one
router.get('/:id', function(request, response) {
	queries.getOne(request.params.id)
	.then(function(show) {
		response.json(show);
	})
})

// Create the route for creating an item
router.post('/', function(request, response) {
	queries.create(request.body)
	.then(function(create){
		response.json(create);
	})
	.catch(err =>{
		console.err(err)
	})
})

// Create the route for updating


// Route for deleting an item


module.exports = router;
