export default async function handler(request, response) {
  const { sign, date } = request.query; //extracting the sign and date from the query
  const formatedDate = date.toUpperCase();

  const responseAPI = await fetch(
    `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=${formatedDate}`
  );
  if (!responseAPI.ok) {
    console.log(sign);
    console.log(formatedDate);
    console.log(await responseAPI.json());
    throw new Error("Network response was not ok");
  }
  const { data } = await responseAPI.json(); // read response and parse it as JSON

  response.status(200).json({
    ...data,
  });
}
