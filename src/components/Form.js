import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, handelEditSubmit } from '../Redux/todolist/action'

const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
    const [todoValue, setTodoValue] = useState("")
    const [editValue, setEditValue] = useState("")
    useEffect(() => {
        setEditValue(editTodo.todo)
    }, [editTodo])
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        let date = new Date();
        let time = date.getTime()
        const todoItems = {
            id: time,
            todo: todoValue,
            isCompleted: false
        }
        setTodoValue("")
        dispatch(addTodo(todoItems))
    }
    const editSubmit = (e) => {
        e.preventDefault()
        let editItems = {
            id: editTodo.id,
            todo: editValue,
            isCompleted: false
        }
        dispatch(handelEditSubmit())
    }
    return (
        <>
            {
                editFormVisibility === false ? (
                    <form className='form-group custom-form' onSubmit={handleSubmit}>
                        <label>Add your todo-items</label>
                        <div className='input-and-btn'>
                            <input type="text" className='form-control' required
                                value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
                            <button type="submit" className='btn btn-secondary btn-md'>ADD</button>
                        </div>
                    </form>
                ) : (
                    <form className='form-group custom-form' onSubmit={editSubmit}>
                        <label>Update your todo-items</label>
                        <div className='input-and-btn'>
                            <input type="text" className='form-control' required
                                value={editValue || ""} onChange={(e) => setEditValue(e.target.value)} />
                            <button type="submit" className='btn btn-secondary btn-md'>Update</button>
                        </div>
                        <button className='btn btn-primary btn md black-btn' onClick={cancelUpdate}>Back</button>
                    </form>
                )
            }
        </>

    )
}

export default Form
