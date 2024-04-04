import dbConnect from "@/db/connect";
import Sign from "@/db/models/signs";
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {//alle daten aus der datenbank holen
    const signs = await Sign.find();
    if (!signs) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(signs);
  }
}
