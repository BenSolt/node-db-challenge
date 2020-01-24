const express = require('express');

const Resources = require('./resource-model');

const router = express.Router();


//GET
router.get('/', (req, res) => {
  Resources.find()
  .then(resource => {
    res.json(resource);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});


router.post('/', (req, res) => {
  const schemeData = req.body;

  Resources.add(schemeData)  // <--- add - in conjuction with resources-model file.
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});