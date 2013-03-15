// a convenience function, usage:
// var tower = require('voxel-tower')(game)
// if we did module.exports = Tower then the usage would
// have to be:
// var Tower = require('voxel-tower')
// var tower = new Tower()
module.exports = function(opts) {
	opts	= tQuery.extend(opts, {
		url	: 'images/items.png',
	})
	return new tQuery.Spritesheet(opts)
}

require('./vendor/tquery.spritesheet.js')

// expose the Items constructor so that it is available
// in case someone wants to access the .prototype methods, etc
module.exports.Items = tQuery.Spritesheet

