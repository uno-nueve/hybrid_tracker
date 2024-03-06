import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProgressionSchema = new Schema({
    sets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Set' }],
});

const ProgressionModel = mongoose.model('Progression', ProgressionSchema);
export default ProgressionModel;
