// models/WeldingRobotThreshold.js
const mongoose = require("mongoose");

const weldingRobotSchema = new mongoose.Schema({
  machine_id: { type: String, required: false, unique: true, default: "welding_robot_006" },
  weld_temperature: {
    worker: { type: Number, default: 1800, required: false },
    manager: { type: Number, default: 1900, required: false },
  },
  vibration_level: {
    worker: { type: Number, default: 0.7, required: false },
    manager: { type: Number, default: 0.9, required: false },
  },
  power_consumption: {
    worker: { type: Number, default:  8.5, required: false },
    manager: { type: Number, default:  9.5, required: false },
  },
  weld_current: {
    worker: { type: Number, default: 140, required: false },
    manager: { type: Number, default: 160, required: false },
  },
  weld_voltage: {
    worker: { type: Number, default: 28, required: false },
    manager: { type: Number, default: 35, required: false },
  },
  weld_time: {
    worker: { type: Number, default: 400, required: false },
    manager: { type: Number, default: 600, required: false },
  },
  pressure_applied: {
    worker: { type: Number, default: 900, required: false },
    manager: { type: Number, default: 1100, required: false },
  },
  gas_flow_rate: {
    worker: { type: Number, default: 18, required: false },
    manager: { type: Number, default: 25, required: false },
  },
});

const WeldingRobotThreshold = mongoose.model(
  "WeldingRobotThreshold",
  weldingRobotSchema
);

module.exports = WeldingRobotThreshold;
