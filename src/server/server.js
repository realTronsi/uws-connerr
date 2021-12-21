'use strict';

const wsServer = require("./wsserver");
const httpServer = require("./httpserver");

module.exports = Server;

function Server() {
	this.initalized = false;

	this.server = null;
	this.arenas = [];
}

Server.prototype.init = function (){
	if(this.initalized) return;
	this.initalized = true;

	this.httpserver = new httpServer();
	this.httpserver.init();
	this.wsserver = new wsServer();
	this.wsserver.init();
}