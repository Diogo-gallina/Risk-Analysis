import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";

export async function analyzesRoutes(app: FastifyInstance){

    app.get('/', async() => {
        const analyzes = await knex('analyzes').select()

        return { analyzes }
    })


}