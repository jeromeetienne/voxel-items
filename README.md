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
  
## Usefull Command Lines

* to install dev dependancy
```
npm install
```

* to publish the package in npm repo - dont forget to bump version number
```
npm publish
```

* to get a live server of the demo
```
npm start
``` 

* to publish on gh-pages
```
# go on gh-pages branch
git checkout gh-pages

# merge master branch
git merge master

# install all dependancies (if not already done)
npm install

# force to add them (they are in .gitignore)
git add -f node_modules

# push it to github
git push 

# come back on master branch
git checkout master
```