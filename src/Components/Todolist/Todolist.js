import React , {useState} from 'react'
import './Todolist.css'
import { MdDone } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Todolist() {

  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')
  const [status, setStatus] = useState('All')

  const todoTitleHandler = (e) => {
    setTodoTitle(
      prevState => {
        return prevState = e.target.value
      }
    )
  }

  const addTodo = (e) => {
    e.preventDefault()

    let newTodoList = [...todos]

    let newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false
    }

    newTodoList.push(newTodo)

    setTodos(
      prevState => {
        return prevState = newTodoList
      }
    )

    setTodoTitle(
      prevState => {
        return prevState = ""
      }
    )
  }

  const completedHandler = (todoId) => {
    let updatedTodos = [...todos]

    updatedTodos.forEach(todo => {
      if (todo.id === todoId) {
        if (todo.completed === false) {
          todo.completed = true
        } else {
          todo.completed = false
        }
      }

      setTodos (
        prevState => {
          return prevState = updatedTodos
        }
      )
    })
  }

  const removeTodoHandler = (todoId) => {
    let finalyTodoList = [...todos]

    let targetTodoIndex = finalyTodoList.findIndex(todo => {
      return todo.id === todoId
    })

    console.log(targetTodoIndex);
  }

  return (
    <div className='Todo-list'>
      <form onSubmit={addTodo} action="#" id='Todo-form'>
        <input onChange={todoTitleHandler} value={todoTitle} type="text" className='Todo-input' placeholder='Enter the Todo' />
        <input type="submit" className='submit-btn' value="Add" />
      </form>
      <select className='Filter'>
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      <ul className='Todos'>  
      {todos.map(todo => {
        return (
        <li key={todo.id} className={todo.completed === false ? 'Todo' : 'Todo done'}>
          <span className='Todo-title'>{todo.title}</span>
          <div>
            <button onClick={() => completedHandler(todo.id)} className='Done-btn'><MdDone/></button>
            <button onClick={() => removeTodoHandler(todo.id)} className='Delete-btn'><FaRegTrashAlt/></button>
          </div>
        </li>
        )
      })}
      </ul>
    </div>
  )
}
