const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { type } = req.body;

  if (!type) {
    return res.status(400).json({ message: 'Emergency type is required' });
  }

  console.log(`🚨 Emergency reported: ${type}`);

  // Later: integrate email/SMS alert services
  res.status(200).json({ message: `Emergency help for "${type}" dispatched` });
});

module.exports = router;
