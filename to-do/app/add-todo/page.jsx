'use client';
import { useRouter } from "next/navigation"; 
import { useState } from "react";

const AddTodo = () => {

  const router = useRouter();
  const [todo, setTodo] = useState("");

  const createTodo = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/add-todo', {
        method: 'POST',
        body: JSON.stringify({
          todo: todo,
        })
      });

      if (res.ok) {
        console.log(JSON.stringify(res.body));
        router.push("/");
      } else {
        const error = await res.text(); 
        console.log(`error: ${error}, got todo: '${todo}'`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Add a todo</h2>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={todo} // Add the value prop to bind the input with the todo state
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo;