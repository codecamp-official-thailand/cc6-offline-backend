const con = require('../mysql');
const { query } = require('express');

const todoList = [];

const createTodo = (req, res) => {
    const { task } = req.body;
    const nowAday = new Date();

    const newDate = `${nowAday.getFullYear()}-${nowAday.getMonth() + 1}-${nowAday.getDate()}`;

    const sql = `INSERT INTO \`cc6_todo_list\`.\`todolist\` 
    (\`task\`, \`duedate\`) VALUES ("${task}", "${newDate}")`;

    con.query(sql, function (err, result) {
        if (err) throw err;

        console.log("Perm Sum Lert Loew");
        res.status(201).send(result);
    });
};

const getTodos = (req, res) => {
    con.query("SELECT * FROM cc6_todo_list.todolist", (err, result) => {
        if (err) throw err;

        res.status(200).send(result);
    });
};

const getTodoById = (req, res) => {
    const targetId = Number(req.params.id);

    con.query(`SELECT * FROM cc6_todo_list.todolist WHERE id = ${targetId}`, (err, result) => {
        if (err) throw err;

        res.status(200).send(result[0]);
    });
};

const updateTodo = (req, res) => {
    const targetId = Number(req.params.id);
    const { task } = req.body;

    con.query("UPDATE `cc6_todo_list`.`todolist` SET\
     `task` = '" + task + "' WHERE (`id` = '" + targetId + "')", (err, result) => {

        res.status(200).send({ message: `Updated ID ${targetId}` });
    });
};

const deleteTodo = (req, res) => {
    const targetId = Number(req.params.id);

    con.query("DELETE FROM `cc6_todo_list`.`todolist` WHERE (`id` = '" + targetId + "')", (err, result) => {
        if (err) throw err;

        res.status(204).send();
    });
};

module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
};