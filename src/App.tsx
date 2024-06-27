import './App.css'
import TodoList from './components/todo-list/todo-list'
import { Todo } from './types'

function App() {
  return (
    <>
      <TodoList 
        addTodo={(todo: Todo) => console.log(`addTodo : id=${todo.id}, ${todo.text}`)} 
        removeTodo={(id:number) => console.log(`removeTodo : id=${id}`)} 
        todos={[{id:1, text:"default"}]}/>
    </>
  )
}

export default App
