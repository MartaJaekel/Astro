import axios from 'axios';

const apiKey = process.env.GEO_CODE_API_KEY;  // Replace with your actual API key

export const getCoordinates = async (place: string): Promise<{ latitude: number; longitude: number }> => {
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(place)}&key=${apiKey}`
  );

  const data = response.data;
  if (data && data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry;
    return { latitude: lat, longitude: lng };
  } else {
    throw new Error('Unable to find coordinates for the given place');
  }
};