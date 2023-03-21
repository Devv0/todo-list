import { useState } from 'react';
import './App.css';

function TodoForm( {addTodo} ){
  const [value, setValue] = useState('')

  const handlSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handlSubmit}>
      <textarea
        type='text'
        className='input'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  )
}

function Todo( {todo} ){
  return(
    <div className='todo'>
      {todo.text}
    </div>
  )
}

function App() {

  const [todos, setTodos] = useState([
    { text: ''},
  ],)

  const addTodo = text => {
    const newTodo = [...todos, {text}]
    setTodos(newTodo)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
          />
        ))}
    </div>
  );
}

export default App;
