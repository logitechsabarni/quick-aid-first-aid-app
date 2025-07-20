const express = require('express');
const cors = require('cors');
const instructionsRoute = require('./routes/instructions');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/instructions', instructionsRoute);

app.get('/', (req, res) => {
  res.send('QuickAid backend is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
