import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SetSchema = new Schema({
    set: Number,
    rep: Number,
});

const SetModel = mongoose.model('Set', SetSchema);
export default SetModel;
