import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
    program_name: String,
    days: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Day' }],
});

const ProgramModel = mongoose.model('Program', ProgramSchema);
export default ProgramModel;
