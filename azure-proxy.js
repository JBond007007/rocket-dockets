// azure-proxy.js
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

const AZURE_ENDPOINT = 'https://rocket-dockets-form.cognitiveservices.azure.com/';
const AZURE_API_KEY = '3effUV3OXgH9zv33kT7CnUe3uYPn21DbyC5GYovvLRaDKnJ60mUqJQQJ99BEACL93NaXJ3w3AAALACOGujXM';

app.use(cors());
app.use(express.json());

app.post('/analyze', upload.single('file'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileData = fs.readFileSync(filePath);

    const response = await axios.post(
      `${AZURE_ENDPOINT}formrecognizer/documentModels/prebuilt-receipt:analyze?api-version=2023-07-31`,
      fileData,
      {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
        },
      }
    );

    res.json(response.data);
    fs.unlinkSync(filePath); // clean up file
  } catch (error) {
    res.status(500).json({ error: error.message, details: error.response?.data });
  }
});

app.listen(3001, () => {
  console.log('Azure OCR proxy server running on http://localhost:3001');
});
