const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();


//GET
router.get('/', (req, res) => {
  Tasks.find()
  .then(task => {
    res.json(task);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get task' });
  });
});


router.post('/', (req, res) => {
  const schemeData = req.body;

  Tasks.add(schemeData)  // <--- .add - in conjuction with tasks-model file.
  .then(task => {
    res.status(201).json(task);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task' });
  });
});