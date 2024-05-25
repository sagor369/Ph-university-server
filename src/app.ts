import express, { Application, Request, Response } from "express";
import cors from "cors";
import { GlobalError } from "./app/Modules/Middlewares/GlobalErrorHandler";
import { notFound } from "./app/Modules/Middlewares/NotFound";
import router from "./app/AllRouts/AllRouter";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(GlobalError);
app.use(notFound);

export default app;
