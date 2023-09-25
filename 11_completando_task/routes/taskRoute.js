const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.DeleteTask)
router.get('/edit/:id', TaskController.UpdateTask)
router.post('/edit/:id', TaskController.UpdateTaskSave)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/', TaskController.ShowTask)

module.exports = router