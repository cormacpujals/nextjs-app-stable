'use client'
import { useEffect, useState } from 'react';

const TodoCardList = ({ todos }) => {
  return (
      <div>
        {todos.map((todo) => (
            <li key={todo._id}>
              {todo.todo}
            </li>
        ))}
      </div>
  )
}


export default function AllTodos() {

  let [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('/api/todos');
      const data = await res.json();
      setTodos(data);
    }
    fetchTodos();
  }, [])

  return (
      <div>
        <ul>
          <TodoCardList todos={todos} />
        </ul>
      </div>
  )
}
