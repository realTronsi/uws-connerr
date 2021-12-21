'use strict';

const uws = require("uWebSockets.js");
const WebSocketServer = uws.App;

const Listener = require("./socket/listener");
const wsconfig = require("./.config/wsconfig");

module.exports = wsServer;

function wsServer() {
	this.server = WebSocketServer();
}

wsServer.prototype.init = function () {
	const wsListener = Listener;
	this.server.ws("*", wsListener);
	this.server.listen(wsconfig.PORT, ls => {});
}