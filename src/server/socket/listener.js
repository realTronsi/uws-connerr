module.exports = Listener;

function Listener() {
	
}

Listener.prototype.open = function(ws) {
	console.log("This message should appear when a new tab is opened");
}