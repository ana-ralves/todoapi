const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()

app.use(express.json())

const todoapi = [];

app.post('/todoapi', (req, res) => {
    const { title, description } = req.body;

    const todoAlreadyExists = todoapi.some(
        todo => todo.title === title
    );

    if (todoAlreadyExists) {
        return res.status(400).json({
            message: "There is already a to-do with this title"
        });
    }

    todoapi.push({
        id: uuidv4(),
        title,
        description,
        completed: false
    });

    return res.status(201).json({
        message: "To-do created!",
        todoapi
    })
})

app.get('/todoapi', (req, res) => {
    const { todo } = req;

    return res.json({
        message: 'To-do list successfully created',
        todoapi
    })
});

app.put('/todoapi/:id/complete', (req, res, next) => {
    const { title, description } = req.body;

    const todoComplete = todoapi.find(
        todo => todo.title === title
    );

    if (!todoComplete) {
        return res.status(400).json({
            message: 'To-do not found!'
        });
    }
    todoComplete.completed = true;
    return res.json(todoComplete);

});

app.put('/todoapi/:id/uncomplete', (req, res) => {
    const { title, description } = req.body;

    const todoUncomplete = todoapi.find(
        todo => todo.title === title
    );

    if (!todoUncomplete) {
        return res.status(404).json({
            message: 'To-do not found!'
        });
    }

    todoUncomplete.completed = false;

    return res.json(todoUncomplete);
});

app.delete('/todoapi/id', (req, res) => {
    const { title, description } = req.body;

    const todoIndex = todoapi.findIndex(
        todo => todo.title === title
    );

    if (todoIndex === -1) {
        return res.status(404).json({
            message: 'To-do not found!'
        });
    }
    const deletedTodo = todoapi.splice(todoIndex, 1);
    return res.json({
        message: 'To-do list successfully deleted',
        deletedTodo: deletedTodo[0]

    });
});

app.get('/todoapi/completed', (req, res) => {
    const completedTodoApi = todoapi.filter(
        todo => todo.completed === true
    );

    return res.json(completedTodoApi);
});

app.get('/todoapi/pending', (req, res) => {
    const pendingTodoApi = todoapi.filter(
        todo => todo.completed === false
    );

    return res.json(pendingTodoApi);
});

app.listen(3333)

