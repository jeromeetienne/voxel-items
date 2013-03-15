/**
 * contains the last created tQuery.world
 */
var _world;

/**
 * initialize a tQuery.World based on a voxel.js Game
 * 
 * @param  {Game} 		game 	a game from voxel.js
 * @return {tQuery.World}      		a tQuery.World
 */
exports.initWorld	= function(game){
	// handle default value
	game	= game	|| global.game;
	// if world is already init, return it now
	if( _world !== undefined )	return _world;	
	// define some global space stuff which are assumed by tQuery
	window.THREE	= game.THREE
	window.tQuery	= require('./vendor/tquery.js')
	// create a world on voxeljs resources
	var world	= tQuery.createWorld({
		autoRendering	: false,		// voxel.js does rendering the scene by itself
		scene		: game.scene,
		camera		: game.view.camera,
		renderer	: game.view.renderer
	}).start();
	// copy it for later
	_world	= world
	// return the just-created world
	return _world;
}
