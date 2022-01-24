import mongoose from "mongoose";
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  documentPath: {
    type: String,
    required: true
  },
  postingDatatime: {
    type: Date,
    required: true
  },
  summary: {
    type: String
  },
  thumbnailUrl: {
    type: String
  },
  headerImageUrl: {
    type: String
  },
  category: {
    type: String
  },
  projects: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  }
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
