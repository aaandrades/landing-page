// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("Start");
  console.log(req);
  await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
  console.log("Finished");
  res.status(200).json({ name: "John Doe" });
}
