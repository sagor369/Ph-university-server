import config from "./config";
import app from "./app";
import mongoose from "mongoose";
import { Server } from "http";

let server :Server


async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error)
  }
}

process.on('unhandledRejection', () =>{
  console.log("server is close")
  if(server){
    server.close(()=>{
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on("uncaughtException" , ()=>{
  console.log("server is colse now")
  process.exit(1)
})
main();

