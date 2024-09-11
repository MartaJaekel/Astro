import dbConnect from "@/db/connect";
import Sign from "@/db/models/signs";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  await dbConnect();
  //fetching all signs from the database
  if (request.method === "GET") {//alle daten aus der datenbank holen
    const signs = await Sign.find();
    if (!signs) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(signs);
  }
}
