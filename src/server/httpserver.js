'use strict';

const express = require("express");
const path = require("path");

const httpconfig = require("./.config/httpconfig");

module.exports = httpServer;

function httpServer(){
	this.app = express();
	this.server = null;
}

httpServer.prototype.init = function () {
	this.app.use(express.static(httpconfig.staticdir));
	this.app.get("*", function (req, res) {
		res.sendFile(httpconfig.index);
	});
	
	this.server = this.app.listen(httpconfig.PORT);
}