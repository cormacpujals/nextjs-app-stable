import { connectToDB } from "@/utils/database";
import Todo from "@/models/todo";
import { NextResponse } from "next/server"

export const POST = async (req) => {
  const { todo } = await req.json();

  try {
    await connectToDB();

    const newTodo = new Todo({
      todo,
    })

    await newTodo.save();

    return new Response(JSON.stringify(newTodo), {
      status: 201
    })
  } catch (error) {
    return new Response("Failed to create new todo", { status: 500 }) 
  }
}

export const GET = async () => {
  
  try {
    await connectToDB();
    const todos = await Todo.find();

    return new NextResponse(todos, { status: 200 });
  } catch (error) {
    return new NextResponse("DB error", { status: 500 });
    
  }
}