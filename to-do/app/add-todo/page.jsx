'use client';

import { useState } from "react";

const AddTodo = () => {

  const createTodo = async (e) => {
    e.preventDefault();

    try {
     const res = await fetch('/api/add-todo', {
      method: 'POST',
      body: JSON.stringify({
        todo: todo.todo,
      })
    }) 
    if(res.ok) {
      console.log(JSON.stringify(res.body))
     } else {
      console.log(`error, got: ${JSON.stringify(res)}`)
     }
    } catch (error) {
     console.log(error) 
    }
  }

  const [todo, setTodo] = useState({
    todo: "",
  });

  return (
    <div>
      <h2>Add a todo</h2>
      <form onSubmit={createTodo}>
        <input type="text" 
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo