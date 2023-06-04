import {NextResponse} from 'next/server';
import { connectToDB } from "@/utils/database";
import Todo from "@/models/todo";

export const GET = async () => {

  try {
    await connectToDB();
    const todos = await Todo.find();

    return new NextResponse(JSON.stringify(todos), { status: 200 });
  } catch (error) {
    return new NextResponse("DB error", { status: 500 });

  }
}
