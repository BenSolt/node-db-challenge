const express = require('express');

const ProjectRouter = require('./schemes/project-router');
const ResourceRouter = require('./schemes/resource-router');
const TaskRouter = require('./schemes/task-router');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

module.exports = server;