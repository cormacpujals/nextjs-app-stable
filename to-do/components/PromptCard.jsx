export default function PromptCard({ todo }) {
  async function handleDelete(e) {
    await fetch('/api/todos/delete', {
      method: 'DELETE',

    })
  }

  return (
      <li key={todo._id}>
        {todo.todo}
        {/*<button onClick={handleEdit}>Edit</button>*/}
        <button onClick={(e) => handleDelete(e.target)}>Delete</button>
      </li>
  )
}
