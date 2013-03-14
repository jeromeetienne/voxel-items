# voxel-items

an example/template node module for voxel.js.

places a items of voxels at some specific game position.

### install it

```
npm install voxel-items
```

## API

### create the items
```
var items = require('voxel-items')()
```

### wait until the image is loaded

```
items.addEventListener('load', function(){
	// you code go here
})
```

### create an item mesh

```
items.createMesh(x, y)
```

get the item which is at x, y in the spritesheet and create a 3d mesh with it

## license

MIT

## TODO
* make alias for each items
  * ```.createMesh('brown-helmet')``` === ```.createMesh(0,0)``` 
  
## usefull command lines

* ```npm install``` to install dev dependancy
* ```npm publish``` to publish the package in npm repo
* ```npm start``` to get a live server of the demo
* to publish on gh-pages

```
git checkout gh-pages
git merge master
npm install
git add -f node_modules
git push 
git checkout master
```