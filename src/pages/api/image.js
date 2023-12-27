import axios from 'axios';

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export default async function (req, res) {
    const prompt = req.body.prompt;
    const page = getRandomNumber(1,100);
    try {
      // Make a GET request to the Unsplash API
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${prompt}&client_id=ae__yUw2sbIfoOwIQ-C7et228jpd0EA_zo2WC6vYZ3M`);
      const image = response.data.results[0].urls.small;
      res.json({image : image});
    } catch (error) {
      console.error('Error fetching photos from Unsplash:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
}