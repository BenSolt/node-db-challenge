const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();


//GET
router.get('/', (req, res) => {

  Projects.find()
  .then(projs => {
    res.json(projs);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});


//GET BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.findById(id)
    .then(rec => {
      if (rec) {
        res.json(rec);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });


router.post('/', (req, res) => {
  const schemeData = req.body;

  Projects.add(schemeData)  // <--- add - in conjuction with projects-model file.
  .then(scheme => {
    res.status(201).json(scheme);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});
