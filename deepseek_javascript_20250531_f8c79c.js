// Пример на Node.js
const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('video'), (req, res) => {
  // Сохранить метаданные в БД
  // Вернуть URL видео
});