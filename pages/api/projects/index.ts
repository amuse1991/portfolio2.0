import { NextApiRequest, NextApiResponse } from "next";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import ProjectSchema from "@lib/model/ProjectSchema";
import dbConnect from "@lib/dbConnect";

// gets a list of projects, probably paginated
const projectsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const projects = await ProjectSchema.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const project = await ProjectSchema.create(
          body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default projectsApi;
