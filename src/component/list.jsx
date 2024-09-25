function List({ todos, onDelete, toggleTodo }) {

    return (
        <>
            {
                todos.map((todo, ind) => {
                    return (
                        <div key={todo.id} className='my-3 flex bg-gray-100 w-5/6 mx-auto'>
                            <h3
                                onClick={() => toggleTodo(todo.id)}
                                style={{ textDecoration: todo.completed && "line-through"}}
                                className='cursor-pointer text-xl text-left font pl-4 py-2 font-medium flex-1'>{todo.todo}
                            </h3>
                            <button
                                className='p-2 bg-red-300 rounded-sm px-4'
                                onClick={() => onDelete(todo.id)}
                            >Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}
export default List