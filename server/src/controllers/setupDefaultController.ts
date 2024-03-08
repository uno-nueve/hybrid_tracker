import { Request, Response } from 'express';
import Program from '../models/Program';
import { friday, monday, saturday, thursday, tuesday, wednesday } from './daysController';

export async function setupDefaultProgram(req: Request, res: Response) {
    try {
        const defaultProgram = new Program({
            program_name: 'default_program',
            days: [monday, tuesday, wednesday, thursday, friday, saturday],
        });

        await defaultProgram.save();
        res.json(defaultProgram);
    } catch (error) {
        console.error('Error setting up compound sets:', error);
        throw new Error('UNSUCCESSFULL SETUP');
    }
}
