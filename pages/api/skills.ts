import { NextApiRequest, NextApiResponse } from "next";
import { TSkill } from "types/api/skills";
import fs from "fs";

const skillsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const skillsBuffer = fs.readFileSync("data/skills.json");
      const skillsString = skillsBuffer.toString();
      if (!skillsString) {
        res.statusCode = 200;
        res.send([]);
      }
      const skills: TSkill[] = JSON.parse(skillsString);
      res.statusCode = 200;
      return res.send(skills);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.send(err);
    }
  }

  res.statusCode = 405;
  console.error(405);
  return res.end();
};

export default skillsApi;
