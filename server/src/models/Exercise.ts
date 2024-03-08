import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    exercise_name: String,
    progressions: [
        {
            set: Number,
            rep: Number,
        },
    ],
});

const ExerciseModel = mongoose.model('Exercise', ExerciseSchema);
export default ExerciseModel;
