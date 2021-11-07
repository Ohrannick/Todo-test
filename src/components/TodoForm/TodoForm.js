import { useState } from "react";
import s from "./TodoForm.module.css";

// Компонента для ввода задачи
function TodoForm({ todo, setTodo }) {
  const [value, setValue] = useState("");
  const [plholder, setPlholder] = useState("Введите наименование задачи...");

  // Функция для добавления задачи в стейт
  // при пустом сообщении ничего не добавляется
  // при повторном вводе одинаковой задачи Placeholder меняется
  function saveTodo() {
    let repeatTodo = todo.some((item) => item.title === value);
    if (repeatTodo) {
      setPlholder("---- Введите уникальную задачу ----");
    } else if (value && !repeatTodo) {
      setTodo(
        [
          ...todo,
          {
            id: new Date().getTime(),
            title: value,
            date: new Date().toLocaleTimeString(),
            status: true,
          },
        ],
        setPlholder("Введите наименование задачи...")
      );
    }
    setValue("");
  }

  // отрабатывает нажатие Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setValue(e.target.value);
      saveTodo();
    }
  };

  return (
    <div className={s.inputForm}>
      <input
        className={s.inputTodo}
        placeholder={plholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className={s.btn} onClick={saveTodo}>
        Сохранить
      </button>
    </div>
  );
}

export default TodoForm;
