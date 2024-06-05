import React , {useState} from 'react'
import './Todolist.css'
import { MdDone } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Todolist() {

  const [todos, setTodo] = useState ([])
  
  return (
    <div className='Todo-list'>
      <form action="#" id='Todo-form'>
        <input  type="text" className='Todo-input' placeholder='Enter the Todo' />
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
        <li className='Todo'>
          <span className='Todo-title'>Test todo</span>
          <div>
            <button className='Done-btn'><MdDone/></button>
            <button className='Delete-btn'><FaRegTrashAlt/></button>
          </div>
        </li>
        )
      })}
      </ul>
    </div>
  )
}
