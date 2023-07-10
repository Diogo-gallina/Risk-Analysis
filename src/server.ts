import fastify from "fastify";

import { env } from "./env";
import { analyzesRoutes } from "./routes/analyzes";

const app = fastify();

app.register(analyzesRoutes, {
  prefix: "analyzes",
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
