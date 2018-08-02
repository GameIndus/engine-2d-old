/*
* GameIndus - A free online platform to imagine, create and publish your game with ease!
*
* GameIndus old 2d engine
* Copyright (c) 2015-2016 Maxime Malgorn (Utarwyn)
* <https://github.com/GameIndus/engine-2d-old>
*
*/

function SingleBehavior(o){
	this.obj = o || {};
}

SingleBehavior.prototype = {

	run: function(go){
		if(this.obj.run != null)
			this.obj.run(go);
	},

	loop: function(go){
		if(this.obj.loop != null)
			this.obj.loop(go);
	}

};