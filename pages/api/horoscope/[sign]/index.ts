import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(request: NextApiRequest, response: NextApiResponse) { 
  const { sign, date } = request.query; //extracting the sign and date from the query
  let formatedDate ;
  if (typeof date === "string") { // had to check that date is a string cause in the case of array Uppercase wouldnt work
    formatedDate = date.toUpperCase();

  }
  
//fetch making http get request to horoscope api 
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

  const monthlyDataHoroscope = monthlyData.horoscope_data
    // removing the title from between the horoscope data
    ?.replace(`${monthlyData.month.split(' ')[0]} Premium Horoscope`, ' ')
    // replacing the dots with dots and spaces
    ?.replace(/\./g, '. ');

  const dailyDataHoroscope = data.horoscope_data
    // remove any sentence that includes drug(s) or alcohol
    // a sentence is a group of words that ends with a dot and is after a dot and a space
    // ?.replace(/\. [^.]*drug[^.]*\./g, '. ')
    // ?.replace(/\. [^.]*alcohol[^.]*\./g, '. ')


  response.status(200).json({
    ...data,
    horoscope_data: dailyDataHoroscope,
    week: { ...weeklyData },
    month: { ...monthlyData, horoscope_data: monthlyDataHoroscope },
  });
}
