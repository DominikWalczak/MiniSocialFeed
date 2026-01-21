import { z } from "zod";

export const UserSchema = z.object({
    email: z.string().email().min(5),
    password: z.string().min(1),
});

export const PostItemSchema = z.array(z.object({
    id: z.number(),
    authorId: z.number(),
    content: z.string(),
    createdAt: z.string().datetime(),
}))

export type PostItemType = z.infer<typeof PostItemSchema>;

export const LoginDataSchema = z.object({
    data: z.object({
        accessToken: z.string(),
        refreshToken: z.string(),
        user: z.object({
            id: z.number(),
            email: z.string(),
        }),
    }),
    message: z.string()
})

export type LoginDataType = z.infer<typeof LoginDataSchema>;