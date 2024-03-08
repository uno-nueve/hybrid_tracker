import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CompoundSchema = new Schema({
    compound_name: String,
    exercises: [
        {
            exercise_name: String,
            progressions: [
                {
                    set: Number,
                    rep: Number,
                },
            ],
        },
    ],
});

const CompoundModel = mongoose.model('Compound', CompoundSchema);
export default CompoundModel;
