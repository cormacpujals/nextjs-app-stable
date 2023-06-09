import { connectToDB } from "@/utils/database"; 
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  try {
    await connectToDB();

    console.log(`req: ${JSON.stringify(req)}`)
    console.log(`req.body: ${JSON.stringify(req.body)}`)
    console.log(`req.query: ${req.query}`)

    const { id } = req.query;
    const todo = todo.find((todo) => todo._id === parseInt(id));
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);  
  }
}