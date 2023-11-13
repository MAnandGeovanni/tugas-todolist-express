const Todos = require('../models/Todos');

module.exports = {
  getAllTodo: (req, res) => {
    res.json({
      message: 'berhasil dapat data todos',
      data: Todos,
    });
  },

  getTodoById: (req, res) => {
    const { id } = req.params;
    const todo = Todos.find((todo) => todo.id == id);

    res.json({
      message: 'berhasil dapat data todo 1 saja',
      data: todo,
    });
  },

  addTodo: (req, res) => {
    const data = req.body;

    const newTodo = {
      id: Todos[Todos.length - 1].id + 1,
      value: data.value,
    };

    Todos.push(newTodo);

    res.status(201).json({
      message: 'berhasil buat todo baru',
    });
  },

  editTodoById: (req, res) => {},

  deleteTodoById: (req, res) => {},
};
