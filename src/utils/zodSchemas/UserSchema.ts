import { z } from "zod";

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    vorname: z.string(),
    password: z.string(),
    email: z.string().email(),
})
