require("dotenv").config();
const port = process.env.PORT || 5000;
const app = require("./src/app");
const server = require("http").createServer(app);

const main = async () => {
  server.listen(port, () => {
    console.log(`[+] server running on`);
    console.log(`[+] http://localhost:${port}`);
  });
};

main();
