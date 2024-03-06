import Day from '../models/Day';
import {
    bridges,
    leg_raises,
    pullups,
    pushups,
    squats,
    twists,
} from './compoundsController';

export const monday = new Day({
    day_name: 'Monday',
    compounds: [pushups, leg_raises],
});

export const tuesday = new Day({
    day_name: 'Tuesday',
    compounds: [pullups, squats],
});

export const wednesday = new Day({
    day_name: 'Wednesday',
    compounds: [bridges, twists],
});

export const thursday = new Day({
    day_name: 'Thursday',
    compounds: [pushups, leg_raises],
});

export const friday = new Day({
    day_name: 'Friday',
    compounds: [pullups, squats],
});

export const saturday = new Day({
    day_name: 'Saturday',
    compounds: [bridges, twists],
});

async function setupDays() {
    await monday.save();
    await tuesday.save();
    await wednesday.save();
    await thursday.save();
    await friday.save();
    await saturday.save();
}

setupDays();
