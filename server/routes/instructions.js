const express = require('express');
const router = express.Router();

const instructionsDB = {
  Burn: [
    'Cool the burn under cool running water for 10-15 minutes.',
    'Remove any clothing or jewelry near the burnt area.',
    'Cover the burn with a sterile, non-fluffy dressing.',
    'Do not apply creams or oils.',
    'Seek medical attention if severe.'
  ],
  Cut: [
    'Apply pressure with a clean cloth to stop the bleeding.',
    'Clean the wound with clean water.',
    'Cover with a sterile bandage.',
    'Watch for signs of infection.',
    'Seek medical help if the cut is deep or bleeding doesn’t stop.'
  ],
  Seizure: [
    'Stay calm and time the seizure.',
    'Protect the person from injury — move objects away.',
    'Do not restrain or put anything in their mouth.',
    'Once it ends, place them in the recovery position.',
    'Call emergency services if it lasts more than 5 minutes.'
  ],
  Choking: [
    'Ask if the person can speak or cough.',
    'If not, give 5 back blows between shoulder blades.',
    'Then give 5 abdominal thrusts (Heimlich maneuver).',
    'Repeat until the object is expelled.',
    'Call emergency services if the person becomes unconscious.'
  ]
};

router.get('/:type', (req, res) => {
  const type = req.params.type;
  const steps = instructionsDB[type];

  if (!steps) {
    return res.status(404).json({ error: 'Instructions not found' });
  }

  res.json({ steps });
});

module.exports = router;
