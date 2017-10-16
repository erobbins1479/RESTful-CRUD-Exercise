var db = require('./connection');
var knex = require('knex');
var config = require('../knexfile');
var pg = knex(config.development);

function getAll() {
	// Get all cartoons and return them to the route
	return pg.table('cartoon').select('*')
}

function getOne(id) {
	// Get one cartoon by the id and return it
	return pg.table('cartoon').select('*').where('id', id)
}

function create(cartoon) {
	// Add a cartoon to the database
		return
		pg.table('cartoon').insert(cartoon).returning('*')
}

function update(id, cartoon) {
	// Update a cartoon with the specified id
}

function remove(id) {
	// Delete the specified cartoon
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
