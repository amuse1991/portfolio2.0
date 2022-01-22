import mongoose from "mongoose";
import TechTags from "./customTypes";

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this project."],
    maxlength: [20, "name cannot be more than 60 characters"]
  },
  startDate: {
    type: Date,
    required: [true, "Please provide start date"]
  },
  endDate: {
    type: Date,
    required: [true, "Please provide end date"]
  },
  urls: {
    type: [String]
  },
  documentPath: {
    type: String
  },
  summary: {
    type: String
  },
  techTags: {
    type: [String]
  },
  roles: {
    type: [String]
  }
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
