import { NextApiRequest, NextApiResponse } from "next";
import ddbClient from "@lib/api/ddbClient";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

// gets a list of projects, probably paginated
const projectsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body, query } = req;
  if (method === "GET") {
    const params: DocumentClient.ScanInput = {
      TableName: "project"
    };
    try {
      const data = await ddbClient.scan(params).promise();
      console.log("=====data====", data.Items);
      res.statusCode = 200;
      res.send(data.Items);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.send(err);
    }
  } else {
    res.statusCode = 405;
    console.error(405);
  }

  return res.end();
};

export default projectsApi;
