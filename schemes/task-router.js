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

// GET BY ID

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   Tasks.findById(id)
//   .then(scheme => {
//     if (scheme) {
//       res.json(scheme);
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id.' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get schemes' });
//   });
// });


//GET ID TASKS
router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Tasks.findtasks(id)
  .then(tasks => {
    if (tasks.length) {
      res.json(tasks);
    } else {
      res.status(404).json({ message: 'Could not find tasks for given scheme' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});


//POST (CREATE)
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

module.exports = router;