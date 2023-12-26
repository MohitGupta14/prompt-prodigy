import axios from 'axios';

export default async function handler(req, res) {
  const { prompt } = req.body;
  const encodedParams = new URLSearchParams();
  encodedParams.set('src', prompt);
  encodedParams.set('hl', 'en-us');
  encodedParams.set('r', '0');
  encodedParams.set('f', '8khz_8bit_mono');

  const options = {
    method: 'GET',
    url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
    params: {
      key: '250a3c32295441c89cc5428861ea5e17',
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'b4322947f9mshefffe750a26fb26p1926f1jsn56a7632159b0',
      'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com',
    },
    data: encodedParams,
  };
  

  try {
    const response = await axios.request(options);
    
    const voiceMessage = Buffer.from(response.data, 'binary').toString('base64');

    res.json({ voiceMessage: voiceMessage});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate speech" });
  } 
}
