//import the todo
const Todo = require("../models/todo");

// define the route handler

exports.createTodo = async (req, res) => {
  try {
    // extract the title and description from request body
    const { title, description } = req.body;
    // create a new todo obj and insert in db
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "entry created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server issue",
      message: err.message,
    });
  }
};
