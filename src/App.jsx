import { useCallback, useMemo, useState } from 'react';
import './App.css'
import Input from './component/input'
import List from './component/list';
import FilterButtons from './component/filterbuttons';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All")

  const addTodo = useCallback(() => {
    const todoArr = [...todos, {
      todo,
      id: Date.now(),
      complete: false,
    }]
    setTodos([...todoArr]);
    setTodo("");
  }, [todo])


  const deleteTodo = useCallback((id) => {
    const filter = todos.filter((data) => data.id !== id);
    setTodos([...filter])
  }, [todos])


  const toggleTodo = useCallback((id) => {
    const todoArr = [...todos]
    const todoInd = todoArr.findIndex((data) => data.id == id);
    todoArr[todoInd].completed = !todoArr[todoInd].completed
    setTodos([...todoArr])
  }, [todos])

  const filteredTodos = useMemo(() => todos.filter((data) => {
    if (filter == "All") {
      return true;
    }
    if (filter == "Complete" && data.completed) {
      return true;
    }
    if (filter == "Not Complete" && !data.completed) {
      return true;
    }
  }), [filter, todos]);

  return (
    <>
      <div className='text-center mx-auto m-10'>
        <h1 className='p-5 text-4xl '>Todo App</h1>

        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onClick={addTodo} />

        <FilterButtons
          filter={filter}
          setFilter={setFilter} />

        <List
          toggleTodo={toggleTodo}
          todos={filteredTodos}
          onDelete={deleteTodo} />

      </div>
    </>
  )
}

export default App
