import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(request: NextApiRequest, response: NextApiResponse) { 
  const { sign, date } = request.query; //extracting the sign and date from the query
  let formatedDate ;
  if (typeof date === "string") { // had to check that date is a string cause in the case of array Uppercase wouldnt work
    formatedDate = date.toUpperCase();

  }
  

  const responseAPI = await fetch(
    `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=${formatedDate}`
  );
  if (!responseAPI.ok) {
    throw new Error("Network response was not ok");
  }
  const { data } = await responseAPI.json(); // read response and parse it as JSON

  const responseAPIWeekly = await fetch(
    `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/weekly?sign=${sign}`
  );

  if (!responseAPIWeekly.ok) {
    throw new Error("Network response was not ok");
  }
  const responseAPIMonthly = await fetch(
    `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/monthly?sign=${sign}`
  );

  if (!responseAPIMonthly.ok) {
    throw new Error("Network response was not ok");
  }
  const { data: monthlyData } = await responseAPIMonthly.json();
  const { data: weeklyData } = await responseAPIWeekly.json(); // read response and parse it as JSON
  console.log(monthlyData);
  response.status(200).json({
    ...data,
    week: { ...weeklyData },
    month: { ...monthlyData },
  });
}
