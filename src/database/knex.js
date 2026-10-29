import KnexConfig from "knex"
import "dotenv/config"
import { Connection } from "pg"
 
export const knex = KnexConfig({
    client: "pg",
    Connection: {},
    debug: true
})