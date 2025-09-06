import express from 'express';
import cors from 'cors';
import getCitybyAll from './getCitybyAll.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/search-cities', async (req, res) => {
    try {
        const { temp, weather, date, returnDate } = req.body;
        const results = await getCitybyAll(temp, weather, date, returnDate);
        res.json(results);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});