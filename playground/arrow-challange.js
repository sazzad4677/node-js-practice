const tasks = {
    tasks: [ {
        text: 'Grocery Shopping',
        completed: true,
    },
    {
        text: 'clean yard',
        completed: false,
    },
    {
        text: 'film course',
        completed: false,
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTasksToDo())