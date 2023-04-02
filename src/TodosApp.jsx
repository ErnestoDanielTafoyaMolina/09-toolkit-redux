import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis'

export const TodosApp = () => {

    // const { data: todos = [], isLoading } = useGetTodosQuery();

    const [todoId, setTodoId] = useState(1);

    const { data: todo, isLoading } = useGetTodoQuery( todoId );

    const onNextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const onPrevTodo = () => {
        if( todoId <= 1) return;
        setTodoId( todoId - 1 );
    }
    
  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />

        <h4>isLoading: { isLoading ? 'True': 'False' } </h4>
        <pre>{ JSON.stringify( todo ) }</pre>

        <button onClick={ onPrevTodo }>
            Prev Todo
        </button>
        <button onClick={ onNextTodo }>
            Next Todo
        </button>
        {/* <ul>
            {
                todos.map( ({ id, title , completed}) => (
                    <li
                        key={id}
                    >  
                        <strong>{ completed ? 'DONE ':'Pending ' }</strong>
                        { title }
                    </li>
                ))
            }
        </ul> */}

    
    </>
  )
}
