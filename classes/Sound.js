/*
* GameIndus - A free online platform to imagine, create and publish your game with ease!
*
* GameIndus old 2d engine
* Copyright (c) 2015-2016 Maxime Malgorn (Utarwyn)
* <https://github.com/GameIndus/engine-2d-old>
*
*/

/**
 * Sound
 * @class
 */
function Sound(path){
	this.path = path;
	this.name = "";
	this.audio = new Audio(this.path);

	this.volume = 100;
	this.looping = false;
	this.pitch = 1;
	this.audio.loop = this.looping;
}

Sound.prototype = {

	fromBase64: function(data){
		this.audio.src = data;
		return this;
	},

	setName: function(name){
		this.name = name;
	},

	getName: function(){
		return this.name;
	},

	setVolume: function(volume){
		if(this.audio != null){
			this.volume = volume;
			this.audio.volume = volume / 100;
		}
	},

	setPitch: function(pitch){
		this.pitch = pitch;
		if(this.audio != null) this.audio.playbackRate = this.pitch;
	},

	play: function(){
		if(this.audio != null)
			this.audio.play();
	},

	pause: function(){
		if(this.audio != null)
			this.audio.pause();
	},

	stop: function(){
		if(this.audio != null){
			this.audio.currentTime = 0;
			this.audio.pause();
		}
	},

	setLoop: function(bool){
		if(this.audio != null){
			this.looping = bool;
			this.audio.loop = bool;
		}
	},

}