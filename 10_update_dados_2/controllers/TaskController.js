const Task = require('../model/Task');

module.exports = class TaskController {
    static createTask(request, response) {
        return response.render('tasks/create')
    }
    static async createTaskSave(request, response) {
        const task = {
            title: request.body.title,
            description: request.body.description,
            done: false
        }
        await Task.create(task)
        return response.redirect('/tasks')
    }
    static async DeleteTask(request, response) {
        const id = request.body.id

        try {
            await Task.destroy({ where: { id: id } })
            return response.redirect(`/tasks/all`)
        } catch (err) {
            console.log(err)
        }
    }
    static async UpdateTask(request, response) {
        const id = request.params.id
        const task = await Task.findOne({ raw: true, where: { id: id } })
        return response.render('tasks/edit', { task: task })
    }
    static async UpdateTaskSave(request, response) {
        const id = request.body.id
        const task = {
            title: request.body.title,
            description: request.body.description,
        }
        await Task.update(task, { where: { id: id } })
        return response.redirect('/tasks/edit')
    }
    static async ShowTask(request, response) {
        const tasks = await Task.findAll({ raw: true })
        return response.render('tasks/all', { tasks })
    }
}