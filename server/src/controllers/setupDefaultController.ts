import Program from '../models/Program';
import { friday, monday, saturday, thursday, tuesday, wednesday } from './daysController';

export async function setupDefaultProgram() {
    try {
        const defaultProgram = new Program({
            program_name: 'default_program',
            days: [monday, tuesday, wednesday, thursday, friday, saturday],
        });

        await defaultProgram.save();
    } catch (error) {
        console.error('Error setting up compound sets:', error);
    }
}
