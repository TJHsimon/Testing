const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/pictureTaken/');
  },
  filename: (req, file, cb) => {
    cb(null, 'captured-photo.jpg');
  },
});

const upload = multer({ storage });

app.post('/', upload.single('photo'), (req, res) => {
  res.send('Photo received successfully!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});