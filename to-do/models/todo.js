import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({
  todo: {
    type: String,
    required: [true, "Todo is required"],
  },
})

const Todo = models.Todo || model("Todo", TodoSchema)

export default Todo;