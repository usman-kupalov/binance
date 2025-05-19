import "tsconfig-paths/register";
import "@utils/env";
import * as process from "node:process";
import { normalizePort } from "@utils/port";
import app from "@src/app";
import * as http from "node:http";

const main = async () => {
  const port = normalizePort(process.env.PORT || "3000");

  app.set("port", port);
  let server = http.createServer(app);
  server.listen(port);

  server.on("error", (error: NodeJS.ErrnoException) => {
    if (error.syscall != "listening") throw Error;
  });

  server.on("listening", () => {
    console.log(`App running on port ${process.env.PORT}`);
  });
};

main().catch((error) => {
  console.error(`Error on entry point ${error}`);
  process.exit(0);
});
