const todoList = [];
let id = 1;

const createTodo = (req, res) => {
    const { task } = req.body;
    const newTodo = {
        id: id++,
        task
    };

    todoList.push(newTodo);

    res.status(201).send(newTodo);
};

const getTodos = (req, res) => {
    res.status(201).send(todoList);
};

const getTodoById = (req, res) => {
    const targetId = Number(req.params.id);
    const targetTodo = todoList.find(todo => todo.id === targetId);

    res.status(200).send(targetTodo);
};

const updateTodo = (req, res) => {
    const targetId = Number(req.params.id);
    const { task } = req.body;
    const targetIdx = todoList.findIndex(todo => todo.id === targetId);

    todoList[targetIdx] = {
        id: targetId,
        task
    };

    res.status(200).send({ message: `Updated ID ${targetId}` });
};

const deleteTodo = (req, res) => {
    const targetId = Number(req.params.id);
    const targetIdx = todoList.findIndex(todo => todo.id === targetId);

    todoList.splice(targetIdx, 1);

    res.status(204).send();
};

module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
};