function Input({ onChange, onClick, value }) {

    return (
        <div className='my-3'>
            <input onChange={onChange} className='outline-none p-1.5 border border-gray-400 w-60'
                type="text"
                placeholder='Add Todo'
                value={value}
            />
            <button onClick={onClick}
                disabled={value === ""}
                style={{ backgroundColor: value === '' && 'white'}}
                className='ml-2 p-1.5 rounded-sm bg-slate-200 border border-slate-400'>
                Add Task
            </button>
        </div>
    )
}

export default Input
