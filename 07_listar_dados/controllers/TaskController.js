const Task = require('../model/Task');

module.exports = class TaskController {
    static createTask(request, response) {
        return response.render('tasks/create')
    }
    static async createTaskSave(request, response) {
        const task = {
            title: request.body.title,
            description: request.body.description,
            done:false
        }
        await Task.create(task)
        return response.redirect('/tasks')
    }
    static async ShowTask(request, response) {
        const tasks = await Task.findAll({raw: true})
        return response.render('tasks/all', {tasks})
    }
}