import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    exercise_name: String,
    progressions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Progression' }],
});

const ExerciseModel = mongoose.model('Exercise', ExerciseSchema);
export default ExerciseModel;
