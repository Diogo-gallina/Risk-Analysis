import fastify from "fastify";
import { env } from "./env";
import { analyzesRoutes } from "./routes/analyzes";

const app = fastify();

app.register(analyzesRoutes, {
    prefix: 'analizes'
});

app.listen({
    port: env.PORT
}).then(() => {
    console.log('HTTP Server Running!');
})