const app = require("./app");

const server = app.listen(process.env.PORT, () =>
  console.log(`API Server running.. ${process.env.PORT}`)
);

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => process.exit(1));
});