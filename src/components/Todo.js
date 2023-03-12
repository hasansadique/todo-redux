import React from 'react'
import { useSelector } from 'react-redux'
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash'
import { edit2 } from 'react-icons-kit/feather/edit2'
import { useDispatch } from 'react-redux';
import { removeTodo, handelCheckbox } from '../Redux/todolist/action';

export const Todos = ({ handelEditClick, editFormVisibility }) => {
    const dispatch = useDispatch()

    const todos = useSelector((state) => state.operationsReducer);
    return todos.map((todo) => (
        <div key={todo.id} className='todo-box'>
            <div className='content'>
                {
                    editFormVisibility === false &&
                    <input type="checkbox" onChange={() => dispatch(handelCheckbox(todo.id))} checked={todo.isCompleted}></input>
                }

                <p style={todo.isCompleted === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                    {todo.todo}
                </p>
            </div>
            <div className='actions-box'>
                {
                    editFormVisibility === false &&
                    <>
                        <span onClick={() => dispatch(handelEditClick(todo))}><Icon icon={edit2} /></span>
                        <span onClick={() => dispatch(removeTodo(todo.id))}><Icon icon={trash} /></span>
                    </>
                }

            </div>
        </div>
    ))
}
