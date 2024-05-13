import mongoose from 'mongoose';

const MachineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
    required: true,
  },
  purchasedOn: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
});

const Machine = mongoose.model('Machine', MachineSchema);

export default Machine;
