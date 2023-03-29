import { useState } from 'react';
import './App.css';

function TodoForm( {addTodo, edit, editTodo} ){

  const [value, setValue] = useState('')
  const index = edit

  const handlSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  const handleEdit = e => {
    e.preventDefault()
    if (!value) return
    editTodo(index, value)
    setValue('')
  }

  if (index < 0){
    return (
      <form onSubmit={handlSubmit}>
        <textarea
          type='text'
          className='input'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className='submit'>Add Todo</button>
      </form>
    )
  }

  else{
    return(
      <form onSubmit={handleEdit}>
        <textarea
          type='text'
          className='input'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className='submit'>Change Todo</button>
      </form>
    )
  }
}

function Todo( {todo, index, removeTodo, edit} ){
  return(
    <div className='todo'>
      <input type='checkbox'></input>
      {todo.text}
      <button onClick={() => removeTodo(index)}>Delete</button>
      <button onClick={() => edit(index)}>Edit</button>
    </div>
  )
}


function App() {

  const [todos, setTodos] = useState([
    {text: 'Do the Dishes'},
    {text: 'Go to the Gym'},
  ])

  const [edit, setEdit]= useState(-1)

  const addTodo = text => {
    const newTodo = [...todos, {text}]
    setTodos(newTodo)
  }

  const removeTodo = index =>{
    if (edit === -1){
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
    }
  }

  const Edit = index => {
    const newEdit = [index]
    setEdit(newEdit)
  }

  const editTodo = (index, text) => {
    const newTodo = [...todos]
    newTodo[index] = {text}
    setTodos(newTodo)
    setEdit(-1)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} edit={edit} editTodo={editTodo}/>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            removeTodo={removeTodo}
            edit={Edit}
          />
        ))}
    </div>
  );
}

export default App;
