import getCitybyAll from '../backend/getCitybyAll.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { temp, weather, date, returnDate } = req.body;
      console.log('API received:', { temp, weather, date, returnDate });
      
      const results = await getCitybyAll(temp, weather, date, returnDate);
      res.status(200).json(results);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
