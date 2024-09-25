function FilterButtons({ filter, setFilter }) {
    return (
        <div className='flex justify-around items-center'>
            <button onClick={() => setFilter("All")} className={`${filter == `All` ? `bg-slate-400 text-white` : `bg-slate-200`} p-2 px-4 rounded-sm`}>All</button>
            <button onClick={() => setFilter("Complete")} className={`${filter == `Complete` ? `bg-slate-400 text-white` : `bg-slate-200`} p-2 px-4 rounded-sm`}>Complete</button>
            <button onClick={() => setFilter("Not Complete")} className={`${filter == `Not Complete` ? `bg-slate-400 text-white` : `bg-slate-200`} p-2 px-4 rounded-sm`}>Not Complete</button>
        </div>
    )
}

export default FilterButtons