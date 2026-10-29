import pg from "pg"
import "dotenv/config"

const {pool} = pg 
export const pool = new pool()