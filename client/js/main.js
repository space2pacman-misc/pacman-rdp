let socket = io("http://localhost:7777");

setInterval(() => {
	socket.emit("onClient");
}, 1000)

socket.on("onServer", data => {
	let arrayBufferView = new Uint8Array(data);
	let blob = new Blob([arrayBufferView], { type: "image/jpeg" });
	let imageUrl = window.URL.createObjectURL(blob);
	let img = document.querySelector(".screenshot");
	
	img.src = imageUrl;
})