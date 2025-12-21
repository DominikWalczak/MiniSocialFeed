import { z } from "zod";

export const UserSchema = z.object({
    email: z.string().email().min(5),
    password: z.string().min(1),
});
