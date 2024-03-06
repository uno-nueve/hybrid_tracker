import Exercise from '../models/Exercise';

//TODO: create a file for each compound movement and rename each exercise as a level of it

//* Pushups
export const push1 = new Exercise({
    exercise_name: 'Wall Pushups',
    progressions: [
        { set: 2, rep: 30 },
        { set: 2, rep: 50 },
        { set: 3, rep: 50 },
    ],
});

export const push2 = new Exercise({
    exercise_name: 'Incline Pushups',
    progressions: [
        { set: 2, rep: 20 },
        { set: 2, rep: 30 },
        { set: 3, rep: 40 },
    ],
});

export const push3 = new Exercise({
    exercise_name: 'Advanced Incline Pushups',
    progressions: [
        { set: 2, rep: 20 },
        { set: 2, rep: 30 },
        { set: 3, rep: 35 },
    ],
});

export const push4 = new Exercise({
    exercise_name: 'Knee Pushups',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 20 },
        { set: 3, rep: 30 },
    ],
});

export const push5 = new Exercise({
    exercise_name: 'Full Pushups',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 15 },
        { set: 3, rep: 25 },
    ],
});

export const push6 = new Exercise({
    exercise_name: 'Narrow Pushups',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 10 },
        { set: 3, rep: 25 },
    ],
});

export const push7 = new Exercise({
    exercise_name: 'Side-Staggered Pushups',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 10 },
        { set: 2, rep: 20 },
    ],
});

export const push8 = new Exercise({
    exercise_name: 'Archer Pushups',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 9 },
        { set: 2, rep: 12 },
    ],
});

export const push9 = new Exercise({
    exercise_name: 'Sliding One-Arm Pushups',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 9 },
        { set: 2, rep: 12 },
    ],
});

export const push10 = new Exercise({
    exercise_name: 'One-Arm Pushups',
    progressions: [
        { set: 2, rep: 3 },
        { set: 2, rep: 6 },
        { set: 2, rep: 9 },
    ],
});

export const push11 = new Exercise({
    exercise_name: 'Advanced One-Arm Pushups',
    progressions: [
        { set: 2, rep: 3 },
        { set: 2, rep: 6 },
        { set: 2, rep: 9 },
    ],
});

//* Leg Raises
export const lra1 = new Exercise({
    exercise_name: 'Knee Raises',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 20 },
        { set: 2, rep: 30 },
    ],
});

export const lra2 = new Exercise({
    exercise_name: 'Advanced Knee Raises',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 20 },
        { set: 2, rep: 30 },
    ],
});

export const lra3 = new Exercise({
    exercise_name: 'Alternating Leg Raises',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
        { set: 2, rep: 25 },
    ],
});

export const lra4 = new Exercise({
    exercise_name: 'Full Leg Raises',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 15 },
        { set: 2, rep: 25 },
    ],
});

export const lra5 = new Exercise({
    exercise_name: 'Tuck Plow Raises',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
        { set: 2, rep: 20 },
    ],
});

export const lra6 = new Exercise({
    exercise_name: 'Plow Raises',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
        { set: 2, rep: 20 },
    ],
});

export const lra7 = new Exercise({
    exercise_name: 'Hanging Knee Raises',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
    ],
});

export const lra8 = new Exercise({
    exercise_name: 'Advanced Hanging Knee Raises',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
    ],
});

export const lra9 = new Exercise({
    exercise_name: 'Hanging Leg Raises',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
        { set: 2, rep: 25 },
    ],
});

export const lra10 = new Exercise({
    exercise_name: 'Toe to Bars',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
        { set: 2, rep: 25 },
    ],
});

//* Pullups
export const pull1 = new Exercise({
    exercise_name: 'Wall Pullups',
    progressions: [
        { set: 2, rep: 30 },
        { set: 2, rep: 50 },
        { set: 3, rep: 50 },
    ],
});

export const pull2 = new Exercise({
    exercise_name: 'Horizontal Pullups',
    progressions: [
        { set: 2, rep: 15 },
        { set: 2, rep: 30 },
        { set: 3, rep: 30 },
    ],
});

export const pull3 = new Exercise({
    exercise_name: 'Advanced Horizontal Pullups',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
        { set: 3, rep: 25 },
    ],
});

export const pull4 = new Exercise({
    exercise_name: 'Jackknife Pullups',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 15 },
        { set: 3, rep: 20 },
    ],
});

export const pull5 = new Exercise({
    exercise_name: 'Full Pullups',
    progressions: [
        { set: 1, rep: 3 },
        { set: 2, rep: 6 },
        { set: 3, rep: 12 },
    ],
});

export const pull6 = new Exercise({
    exercise_name: 'Narrow Pullups',
    progressions: [
        { set: 2, rep: 3 },
        { set: 2, rep: 6 },
        { set: 3, rep: 9 },
    ],
});

export const pull7 = new Exercise({
    exercise_name: 'One Hands Pullups',
    progressions: [
        { set: 2, rep: 3 },
        { set: 2, rep: 6 },
        { set: 2, rep: 9 },
    ],
});

export const pull8 = new Exercise({
    exercise_name: 'Advanced One Hand Pullups',
    progressions: [
        { set: 2, rep: 3 },
        { set: 2, rep: 6 },
        { set: 2, rep: 9 },
    ],
});

export const pull9 = new Exercise({
    exercise_name: 'Archer Pullups',
    progressions: [
        { set: 2, rep: 3 },
        { set: 2, rep: 6 },
        { set: 2, rep: 9 },
    ],
});

export const pull10 = new Exercise({
    exercise_name: 'One Arm Pullups',
    progressions: [
        { set: 1, rep: 1 },
        { set: 2, rep: 3 },
        { set: 2, rep: 6 },
    ],
});

//* Squats
export const squat1 = new Exercise({
    exercise_name: 'Jackknife Squats',
    progressions: [
        { set: 2, rep: 15 },
        { set: 2, rep: 25 },
        { set: 3, rep: 35 },
    ],
});

export const squat2 = new Exercise({
    exercise_name: 'Assisted Squats',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 20 },
        { set: 3, rep: 30 },
    ],
});

export const squat3 = new Exercise({
    exercise_name: 'Half Squats',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 25 },
        { set: 2, rep: 50 },
    ],
});

export const squat4 = new Exercise({
    exercise_name: 'Full Squats',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 20 },
        { set: 2, rep: 30 },
    ],
});

export const squat5 = new Exercise({
    exercise_name: 'Narrow Squats',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
        { set: 2, rep: 30 },
    ],
});

export const squat6 = new Exercise({
    exercise_name: 'Side Staggered Squats',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
        { set: 2, rep: 20 },
    ],
});

export const squat7 = new Exercise({
    exercise_name: 'Front Staggered Squats',
    progressions: [
        { set: 2, rep: 7 },
        { set: 2, rep: 12 },
        { set: 2, rep: 15 },
    ],
});
export const squat8 = new Exercise({
    exercise_name: 'Assisted One Leg Squats',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 9 },
        { set: 2, rep: 12 },
    ],
});

export const squat9 = new Exercise({
    exercise_name: 'One Leg Chair Squats',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 9 },
        { set: 2, rep: 12 },
    ],
});

export const squat10 = new Exercise({
    exercise_name: 'One Leg Squats',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 9 },
        { set: 2, rep: 12 },
    ],
});

//* Bridges
export const bri1 = new Exercise({
    exercise_name: 'Glute Bridges',
    progressions: [
        { set: 2, rep: 15 },
        { set: 2, rep: 30 },
        { set: 3, rep: 50 },
    ],
});

export const bri2 = new Exercise({
    exercise_name: 'Straight Bridges',
    progressions: [
        { set: 2, rep: 15 },
        { set: 2, rep: 25 },
        { set: 3, rep: 30 },
    ],
});

export const bri3 = new Exercise({
    exercise_name: 'Wall Bridges',
    progressions: [
        { set: 2, rep: 15 },
        { set: 2, rep: 25 },
        { set: 3, rep: 30 },
    ],
});

export const bri4 = new Exercise({
    exercise_name: 'Incline Bridges',
    progressions: [
        { set: 2, rep: 10 },
        { set: 2, rep: 20 },
        { set: 2, rep: 25 },
    ],
});

export const bri5 = new Exercise({
    exercise_name: 'Head Bridges',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 10 },
        { set: 2, rep: 25 },
    ],
});

export const bri6 = new Exercise({
    exercise_name: 'Full Bridges',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
    ],
});

export const bri7 = new Exercise({
    exercise_name: 'Wheel Bridges',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 10 },
        { set: 2, rep: 15 },
    ],
});

export const bri8 = new Exercise({
    exercise_name: 'Tap Bridges',
    progressions: [
        { set: 2, rep: 5 },
        { set: 2, rep: 20 },
        { set: 2, rep: 30 },
    ],
});

export const bri9 = new Exercise({
    exercise_name: 'Wall Walking Bridges',
    progressions: [
        { set: 1, rep: 3 },
        { set: 1, rep: 6 },
        { set: 2, rep: 10 },
    ],
});

export const bri10 = new Exercise({
    exercise_name: 'Stand to Stand Bridges',
    progressions: [
        { set: 1, rep: 1 },
        { set: 1, rep: 3 },
        { set: 2, rep: 5 },
    ],
});

//* Twists
export const twi1 = new Exercise({
    exercise_name: 'Straight Leg Twists',
    progressions: [
        { set: 3, rep: 15 },
        { set: 3, rep: 30 },
        { set: 3, rep: 60 },
    ],
});

export const twi2 = new Exercise({
    exercise_name: 'Bent Leg Twists',
    progressions: [
        { set: 3, rep: 15 },
        { set: 3, rep: 30 },
        { set: 3, rep: 60 },
    ],
});

export const twi3 = new Exercise({
    exercise_name: 'Full Twists',
    progressions: [
        { set: 3, rep: 15 },
        { set: 3, rep: 30 },
        { set: 3, rep: 60 },
    ],
});
