import { z } from "zod";

export const UserSchema = z.object({
    name: z.string(),
    vorname: z.string(),
    email: z.string().email(),
});


export const PostItemSchema = z.object({
    id: z.number(),
    authorId: z.number(),
    content: z.string(),
    createdAt: z.string().datetime(),
});

export const PostListSchema = z.array(PostItemSchema);

export type PostItemType = z.infer<typeof PostItemSchema>;

export type PostListType = z.infer<typeof PostListSchema>;

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
});

export type LoginDataType = z.infer<typeof LoginDataSchema>;

export const UseMutationSchema = z.object({
  url: z.string().url("Niepoprawny format adresu URL").min(1, "URL jest wymagany"),
  
  options: z.object({
    method: z.enum(["GET", "POST", "PUT", "DELETE", "PATCH"]).optional(),
    headers: z.record(z.string(), z.string()).optional(),
    body: z.string().optional(),
  }).optional()
});

export type UseMutationType = z.infer<typeof UseMutationSchema>;

export const ButtonSchema = z.object({
    variant: z.enum(["primary", "secondary", "danger"]),
    size: z.enum(["sm", "md", "lg"]),
    isLoading: z.boolean().default(false),
    disabled: z.boolean().default(false),
});

export type ButtonType = z.infer<typeof ButtonSchema>;

export const SpinnerSchema = z.string();

export type SpinnerType = z.infer<typeof SpinnerSchema>;