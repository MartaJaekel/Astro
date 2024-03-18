export default async function handler(request, response) {
  const { sign, date } = request.query;
  const formatedDate = date.toUpperCase();

  const responseAPI = await fetch(
    `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=${formatedDate}`
  );
  if (!responseAPI.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await responseAPI.json();

  response.status(200).json(data);
}
