import AWS from "aws-sdk";

const ddbClient = new AWS.DynamoDB.DocumentClient({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

export default ddbClient;
