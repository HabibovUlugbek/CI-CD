const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server is ${PORT}`);
});

app.get("/", (req, res) => {
	console.log("hwllo world");
	res.send({
		msg: "okay",
		status: 200,
	});
});
