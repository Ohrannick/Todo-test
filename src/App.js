import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
