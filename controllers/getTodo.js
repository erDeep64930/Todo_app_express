const Todo = require("../models/todo");

exports.getTodo = async (req, res) => {
  try {
    // fetch all todo items
    const todos = await Todo.find({});
    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "entire data has been fetched",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error ",
    });
  }
};
