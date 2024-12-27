import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/TodoSlice';

function Todos() {
    // Access the todos array from Redux state
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-xl font-bold text-white mb-4">Todos</div>
            <ul className="list-none">
                {todos.length === 0 ? (
                    <p className="text-white">No todos available. Add some tasks!</p>
                ) : (
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        >
                            <div className="text-white">{todo.title}</div>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Remove
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </>
    );
}

export default Todos;
// In the Todos component, we use the useSelector hook to access the todos array from the Redux store. We then map over the todos array to display each todo item in a list. For each todo item, we display the title and a "Remove" button that dispatches the removeTodo action with the todo item's id as the payload.