import * as console from "node:console";
import * as process from "node:process";

const main = async () => {};

main().catch((error) => {
  console.error(`Error on entry point ${error}`);
  process.exit(0);
});
