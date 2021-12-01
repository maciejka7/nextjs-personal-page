// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPosts } from "../../src/feature/posts";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await getAllPosts();
        res.status(200).json({ name: "Hello, world!", posts: data });
    } catch (errors) {
        res.status(500).json({ error: errors });
    }
};
