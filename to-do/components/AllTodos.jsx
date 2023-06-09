'use client'
import { useEffect, useState } from 'react';
import PromptCard from '@/components/PromptCard';

// need to reload state upon create

const TodoCardList = ({ todos }) => {
  return (
      <div>
        {todos.map((todo) => (
            <PromptCard
                todo={todo}
                key={todo._id}
            />
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
