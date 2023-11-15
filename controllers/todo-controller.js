const Todo = require('../models/Todo');


module.exports = {
  getAllTodo : async (req, res) => {
    const todo = await Todo.findAll()

    res.json({
      message:"berhasil dapat data todo",
      data:todo
    })

    
    // res.json({
    //   message: 'berhasil dapat data todos',
    //   data: Todo,
    // });
  },

  getTodoById: (req, res) => {
    // const { id } = req.params;
    // const todo = Todo.find((todo) => todo.id == id);

    // res.json({
    //   message: 'berhasil dapat data todo 1 saja',
    //   data: todo,
    // });
  },

  addTodo: async (req, res) => {
    const data = req.body;

    try {
      await Todo.create(data)
      res.status(201).json({
        message:"berhasil nambah todo"
      })
    } catch {
      res.json({
        message:"gagal nambah todo"
      })
    }




    // const newTodo = {
    //   id: Todo[Todo.length - 1].id + 1,
    //   value: data.value,
    // };

    // Todo.push(newTodo);

    // res.status(201).json({
    //   message: 'berhasil buat todo baru',
    // });
  },

  editTodoById: (req, res) => {},

  deleteTodoById: (req, res) => {},
};
