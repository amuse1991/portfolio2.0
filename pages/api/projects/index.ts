import { NextApiRequest, NextApiResponse } from "next";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import ProjectModel from "@lib/model/ProjectSchema";
import dbConnect from "@lib/dbConnect";

// gets a list of projects, probably paginated
const projectsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const projects = await ProjectModel.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const projectDocument = new ProjectModel(body);
        const error = await projectDocument.validateSync();
        if (error) throw new Error(error);

        const data = await ProjectModel.create(
          projectDocument
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data });
      } catch (error) {
        console.error(error);
        res
          .status(400)
          .json({ success: false, error: (error as Error).message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default projectsApi;
