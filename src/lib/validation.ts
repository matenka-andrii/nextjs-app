import { z } from "zod";

const imageExtRx = /\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/i;

export const formSchema = z.object({
    title: z.string().trim().min(3).max(100),
    description: z.string().trim().min(20).max(500),
    category: z.string().trim().min(3).max(20),
    link: z.string().trim().url().refine((url) => imageExtRx.test(new URL(url).pathname)),
    pitch: z.string().min(10),
});