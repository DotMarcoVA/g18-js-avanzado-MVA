import express from "express";
import morgan from "morgan";

import productRoutes from "./routes/index.routes";

const app = express();

/* Setear el puerto a 4000 */
app.set("port", 4000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/* Middleware que se ejecuta cada que inicia el servidor */
app.use("/api-restful/products", productRoutes);

export default app;
