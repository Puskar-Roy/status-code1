import prisma from "../config/prisma.config";


import { Request, Response } from 'express';


export const createWastePost = async (req: Request, res: Response) => {
    const { authorId, wasteImage, price } = req.body;

    try {
        const wastePost = await prisma.wastePosts.create({
            data: {
                authorId,
                wasteImage,
                price,
            },
        });

        return res.status(201).json(wastePost);
    } catch (error) {
        return res.status(500).json({ error: 'Error creating waste post' });
    }
};

export const getWastePosts = async (req: Request, res: Response) => {
    try {
        const wastePosts = await prisma.wastePosts.findMany({
            include: {
                author: true,
                orders: true,
            },
        });

        return res.status(200).json(wastePosts);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching waste posts' });
    }
};

export const incrementViews = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const wastePost = await prisma.wastePosts.update({
            where: { id },
            data: {
                views: {
                    increment: 1,
                },
            },
        });

        return res.status(200).json(wastePost);
    } catch (error) {
        return res.status(500).json({ error: 'Error incrementing views' });
    }
};
