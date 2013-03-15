// __dirname is the current working directory, we pass it in to
// the textures module and receive back the path from here to where
// the textures are located
var textures	= require('painterly-textures')(__dirname)
var game	= require('voxel-hello-world')({
	texturePath	: textures,
})


// init a tquery world
var world	= require('voxel-tquery').initWorld(game);
// init the items
var items	= require('./voxel-items')();
items.addEventListener('load', function(){
	var avatarPos	= game.controls.target().avatar.position;
	for(var x = 0; x < 16; x++){
		for(var y = 0; y < 16; y++){
			var item	= items.createMesh(x, y)
			if( !item )	continue
			item.addTo(world)
				.positionX(   x - 8)
				.positionY(16-y + 3)
				.positionZ(1)
		}
	}
})

