import { useState } from 'react'

function AddTodo({ addTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text)
      setText('')
    } else {
      alert('Todo cannot be empty')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit" style={{ margin: '10px'}}>Add</button>
    </form>
  )
}

export default AddTodo
