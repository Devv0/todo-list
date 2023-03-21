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

function Todo( {todo, index, removeTodo} ){
  return(
    <div className='todo'>
      {todo.text}
      <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
  )
}

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = text => {
    const newTodo = [...todos, {text}]
    setTodos(newTodo)
  }

  const removeTodo = index =>{
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            removeTodo={removeTodo}
          />
        ))}
    </div>
  );
}

export default App;
