import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CompoundSchema = new Schema({
    compound_name: String,
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
});

const CompoundModel = mongoose.model('Compound', CompoundSchema);
export default CompoundModel;
