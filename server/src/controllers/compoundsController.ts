import Compound from '../models/Compound';
import * as ex from './exercisesController';

export const pushups = new Compound({
    compound_name: 'pushups',
    exercises: [
        ex.push1,
        ex.push2,
        ex.push3,
        ex.push4,
        ex.push5,
        ex.push6,
        ex.push7,
        ex.push8,
        ex.push9,
        ex.push10,
        ex.push11,
    ],
});

export const leg_raises = new Compound({
    compound_name: 'leg_raises',
    exercises: [
        ex.lra1,
        ex.lra2,
        ex.lra3,
        ex.lra4,
        ex.lra5,
        ex.lra6,
        ex.lra7,
        ex.lra8,
        ex.lra9,
        ex.lra10,
    ],
});

export const pullups = new Compound({
    compound_name: 'pullups',
    exercises: [
        ex.pull1,
        ex.pull2,
        ex.pull3,
        ex.pull4,
        ex.pull5,
        ex.pull6,
        ex.pull7,
        ex.pull8,
        ex.pull9,
        ex.pull10,
    ],
});

export const squats = new Compound({
    compound_name: 'squats',
    exercises: [
        ex.squat1,
        ex.squat2,
        ex.squat3,
        ex.squat4,
        ex.squat5,
        ex.squat6,
        ex.squat7,
        ex.squat8,
        ex.squat9,
        ex.squat10,
    ],
});

export const bridges = new Compound({
    compound_name: 'bridges',
    exercises: [
        ex.bri1,
        ex.bri2,
        ex.bri3,
        ex.bri4,
        ex.bri5,
        ex.bri6,
        ex.bri7,
        ex.bri8,
        ex.bri9,
        ex.bri10,
    ],
});

export const twists = new Compound({
    compound_name: 'twists',
    exercises: [ex.twi1, ex.twi2, ex.twi3],
});

async function setupCompounds() {
    await pushups.save();
    await leg_raises.save();
    await pullups.save();
    await squats.save();
    await bridges.save();
    await twists.save();
}

setupCompounds();
