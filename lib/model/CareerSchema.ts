import mongoose from "mongoose";
const CareerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Please provide a name for this career."]
  },
  startDate: {
    type: Date,
    required: [true, "Please provide start date"]
  },
  endDate: {
    type: Date,
    required: [true, "Please provide end date"]
  },
  companyUrl: {
    type: [String]
  },
  imgPath: {
    type: String
  },
  department: {
    type: String
  },
  position: {
    type: String
  },
  techTags: {
    type: [String]
  },
  description: {
    type: String
  },
  projects: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  }
});

export default mongoose.models.Career || mongoose.model("Career", CareerSchema);
