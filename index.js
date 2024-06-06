require("dotenv").config();
const port = process.env.PORT || 5000;
const app = require("./src/app");
const connectDB = require("./src/db/db");
const server = require("http").createServer(app);

const main = async () => {
  await connectDB();
  server.listen(port, () => {
    console.log(`[+] server running on`);
    console.log(`[+] http://localhost:${port}`);
  });
};

main();
