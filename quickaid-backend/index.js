const express = require('express');
const cors = require('cors');
require('dotenv').config();

const emergencyRoutes = require('./routes/emergency');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/emergency', emergencyRoutes);

app.get('/', (req, res) => {
  res.send('✅ QuickAid Backend is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
