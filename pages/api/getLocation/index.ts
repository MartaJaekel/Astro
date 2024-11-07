import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const apiKey = process.env.GEO_CODE_API_KEY;  // Replace with your actual API key

const getCoordinates = async (place: string): Promise<{ latitude: number; longitude: number }> => {
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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { place } = req.body;

    if (typeof place !== 'string') {
      res.status(400).json({ error: 'Place parameter is required and must be a string' });
      return;
    }

    const coordinates = await getCoordinates(place);
    res.status(200).json(coordinates);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};