'use client'
import { useEffect, useState } from 'react';
import PromptCard from '@/components/PromptCard';
import AddTodo from '@/components/AddTodo';

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



export default function Home() {

  let [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    // fetch does not require absolute URL's, but either node-fetch or Jest requires the absolute URL for the tests to pass
  const res = await fetch('http://localhost:3000/api/todos');
  const data = await res.json();
  setTodos(data);
}

  useEffect(() => {
    fetchTodos();
  }, [])


  return (
      <div>
        <AddTodo fetchTodos={fetchTodos} />
        <h2>All to-dos</h2>
        <ul>
          <TodoCardList todos={todos} />
        </ul>
      </div>
  )
}
