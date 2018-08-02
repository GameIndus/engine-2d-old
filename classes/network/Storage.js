/*
* GameIndus - A free online platform to imagine, create and publish your game with ease!
*
* GameIndus old 2d engine
* Copyright (c) 2015-2016 Maxime Malgorn (Utarwyn)
* <https://github.com/GameIndus/engine-2d-old>
*
*/

function Storage(){

	this.online  = {};
	this.session = {};

}

Storage.prototype = {

	get: function(key){
		return this.session[key];
	},

	set: function(key, value){
		this.session[key] = value;
	},

};