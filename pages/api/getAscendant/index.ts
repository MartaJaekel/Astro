import { NextApiRequest, NextApiResponse } from 'next';
import swisseph from 'swisseph';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { birthDate, latitude, longitude } = req.body;

    // Set path to the Swiss Ephemeris files
    swisseph.swe_set_ephe_path('./swisseph'); // Adjust path as needed for your setup

    const dateInSeconds = new Date(birthDate).getTime() / 1000;

    // Calculate houses (including ascendant)
    swisseph.swe_houses(dateInSeconds, latitude, longitude, 'P', (result) => {
      if ("error" in result) {
        res.status(500).json({ error: 'Failed to calculate Ascendant.' });
      } else {
        res.status(200).json({ ascendant: result.ascendant });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
