import dbConnect from "@/db/connect";
import Sign from "@/db/models/signs";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  await dbConnect();
  const { sign } = request.query;
  console.log("sign:", sign);
  if (request.method === "GET") {
    const nameCapitalized = typeof sign === 'string' ? sign.charAt(0).toUpperCase() + sign.slice(1) : '';
    const signData = await Sign.findOne({ name: nameCapitalized });
    if (!signData) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(signData);
  }
}
