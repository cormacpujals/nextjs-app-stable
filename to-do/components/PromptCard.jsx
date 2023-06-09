export default function PromptCard({ todo }) {
  const handleDelete = async (id) => {
    console.log(id)
    const res = await fetch(`/api/todos/delete/${id}`, {
      method: 'DELETE',
    })
    const data = await res.json();
    // render todos again by running fetchTodos();
  }

  return (
      <li key={todo._id}>
        {todo.todo}
        {/*<button onClick={handleEdit}>Edit</button>*/}
        <button onClick={() => handleDelete(todo._id)}>Delete</button>
      </li>
  )
}
