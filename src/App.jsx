
import './App.css'
import Add from './components/Add'
import TodoList from './components/TodoList'
import ReduxProvider from './ReduxProvider'

function App() {
  return (
    <ReduxProvider>
      <Add/>
      <TodoList/>
    </ReduxProvider>
  )
}

export default App
