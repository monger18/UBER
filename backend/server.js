const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;


const server = http.createServer(app);


server.listen(0, () => {
    console.log(`Server is running on port ${server.address().port}`);
});