/*
* GameIndus - A free online platform to imagine, create and publish your game with ease!
*
* GameIndus old 2d engine
* Copyright (c) 2015-2016 Maxime Malgorn (Utarwyn)
* <https://github.com/GameIndus/engine-2d-old>
*
*/

function Config(){
	this.version   = 0.04;
	this.debugMode = true;

	this.defaultSize = {w: 320, h: 320};
	this.assetsDir   = "assets";
	this.gameServer  = "ws://localhost:8080/";

	this.layers = 10;
}

var Config = new Config();