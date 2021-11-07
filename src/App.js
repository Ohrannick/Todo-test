import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <Header todo={todo} />
      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
