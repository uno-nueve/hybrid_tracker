import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DaySchema = new Schema({
    day_name: String,
    compounds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Compound' }],
});

const DayModel = mongoose.model('Day', DaySchema);
export default DayModel;
