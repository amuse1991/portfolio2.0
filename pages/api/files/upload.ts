import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false
  }
};

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        console.log(files);
      });
    } catch (err) {
      console.log(err);
      res.end();
    }
  }
  res.statusCode = 405;
  return res.end();
};

export default upload;
