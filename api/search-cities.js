import getCitybyAll from '../backend/getCitybyAll.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { temp, weather, date, returnDate } = req.body;
      const results = await getCitybyAll(temp, weather, date, returnDate);
      res.status(200).json(results);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
