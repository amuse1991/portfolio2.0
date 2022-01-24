import { NextApiRequest, NextApiResponse } from "next";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import PostModel from "@lib/model/PostSchema";
import dbConnect from "@lib/dbConnect";

const postsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const data = await PostModel.find({});
        res.status(200).send(data);
      } catch (error) {
        res.status(400).send(error);
      }
      break;
    case "POST":
      try {
        const postDocument = new PostModel(body);
        const error = await postDocument.validateSync();
        if (error) throw new Error(error);

        const data = await PostModel.create(
          postDocument
        ); /* create a new model in the database */
        res.status(201).send({ success: true, data });
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

export default postsApi;
