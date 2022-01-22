import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

type TGetObjectListRequestPayload = {
  delimiter?: string;
  prefix?: string;
  maxKeys?: number;
};

export async function getObjectList(payload?: TGetObjectListRequestPayload) {
  if (!process.env.S3_BUCKET_NAME) {
    return console.error("invalid bucket name");
  }

  const params: AWS.S3.ListObjectsRequest = {
    Bucket: process.env.S3_BUCKET_NAME,
    Delimiter: payload?.delimiter || "",
    Prefix: payload?.prefix || "",
    MaxKeys: payload?.maxKeys || 100
  };

  try {
    const data = await s3.listObjects(params).promise();
    return data;
  } catch (err) {
    return console.error("there was an error listing s3 objects", err);
  }
}

export async function getObject(objectKey: string) {
  if (!process.env.S3_BUCKET_NAME) {
    return console.error("invalid bucket name");
  }

  try {
    const params: AWS.S3.GetObjectRequest = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: objectKey
    };

    const data = await s3.getObject(params).promise();

    return data?.Body?.toString("utf-8");
  } catch (err) {
    return console.error("there was an error to find s3 objects", err);
  }
}
