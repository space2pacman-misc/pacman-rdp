let io = require("socket.io")(7777);
let screenshot = require("screenshot-desktop");
let robot = require("robotjs");

class Server {
	constructor() {
		this._init();
	}

	_onConnection(socket) {
		socket.on("onClient", this._onClient.bind(this, socket));
	}

	_onClient(socket) {
		screenshot().then(img => {
			socket.emit("onServer", img);
		})
	}

	_init() {
		io.on("connection", this._onConnection.bind(this));
	}
}

module.exports = new Server();