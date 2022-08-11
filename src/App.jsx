import { useState } from 'react'
import './App.css'
import { List } from './List'

export function App() {
  const [name, setName] = useState()
  const [newName, setNewName] = useState()

  function changeName() {
    event.preventDefault()
    setName(newName)
  }

  function handleChangeName() {
    setNewName(event.target.value)
    console.log(newName)
  }

  return (
    <div>
      <h1>Funcionamento do Hook useState()</h1>

      <form onSubmit={changeName}>
        <input onChange={handleChangeName}
          name='nameInput'
          className='nameInput'
          placeholder='Digite um nome...'
        />
        <button>Inserir</button>
      </form>

      <div className='list'>
        <ul>
          <List name={name} />
        </ul>
      </div>

    </div>
  )
}
