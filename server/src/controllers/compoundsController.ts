import Compound from '../models/Compound';
import { _bridges } from './exerciseControllers/bridgesController';
import { _leg_raises } from './exerciseControllers/legRaisesController';
import { _pullups } from './exerciseControllers/pullupsController';
import { _pushups } from './exerciseControllers/pushupsController';
import { _squats } from './exerciseControllers/squatsController';
import { _twists } from './exerciseControllers/twistsControlles';

export const pushups = new Compound({
    compound_name: 'pushups',
    exercises: _pushups,
});

export const leg_raises = new Compound({
    compound_name: 'leg_raises',
    exercises: _leg_raises,
});

export const pullups = new Compound({
    compound_name: 'pullups',
    exercises: _pullups,
});

export const squats = new Compound({
    compound_name: 'squats',
    exercises: _squats,
});

export const bridges = new Compound({
    compound_name: 'bridges',
    exercises: _bridges,
});

export const twists = new Compound({
    compound_name: 'twists',
    exercises: _twists,
});

export async function setupCompounds() {
    try {
        await pushups.save();
        await leg_raises.save();
        await pullups.save();
        await squats.save();
        await bridges.save();
        await twists.save();
        console.log('Compounds set up successfully');
    } catch (error: any) {
        console.error('Error setting up compounds:', error.message);
        throw new Error('UNSUCCESSFULL SETUP');
    }
}

setupCompounds();

//TODO: refactor code to save exercises in exercise collection
