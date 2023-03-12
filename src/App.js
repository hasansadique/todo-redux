import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { Todos } from './components/Todo';
import { useDispatch } from 'react-redux';
import { deleteAll } from './Redux/todolist/action';
import { useSelector } from 'react-redux';

function App() {
  const [editFormVisibility, setEditFormVisibility] = useState(false)
  const [editTodo, seteditTodo] = useState("")
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.operationsReducer);
  const handelEditClick = (todo) => {
    setEditFormVisibility(true)
    seteditTodo(todo)
  }
  const cancelUpdate = () => {
    setEditFormVisibility(false)
  }
  return (
    <div className="App">
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate} />
      <Todos handelEditClick={handelEditClick} editFormVisibility={editFormVisibility} />
      {
        todos.length > 0 &&
        <button className='btn btn-danger btn-md delete-al' onClick={() => dispatch(deleteAll())}>Delete All </button>
      }
    </div>
  );
}

export default App;
