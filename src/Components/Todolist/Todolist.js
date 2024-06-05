import React from 'react'
import './Todolist.css'

export default function Todolist() {
  return (
    <div className='Todo-list'>
      <form action="#" id='Todo-form'>
        <input type="text" className='Todo-input' placeholder='Enter the Todo' />
        <input type="submit" className='submit-btn' value="Add" />
      </form>

      <ul className='Todos'>  
        
      </ul>
    </div>
  )
}
