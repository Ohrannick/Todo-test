import { useState } from "react";
import s from "./TodoList.module.css";

// Компонента для отображения списка задачи
// при отсутствии задач - указывает на их отсутствие
function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  // удаляет задачу из стейта
  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  // меняет статус задачи при ее закрытии (кнопка Закрыть / Открыть)
  // или при нажатии на наименовании задачи
  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  // редактирование наименования задачи
  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  // сохранение задачи после редактирования
  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  // отрабатывает нажатие Enter
  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      setValue(e.target.value);
      saveTodo(id);
    }
  };

  return (
    <div>
      {todo.length === 0 ? (
        <h3>Задачи отсутствуют</h3>
      ) : (
        todo.map((item) => (
          <div className={s.items} key={item.id}>
            {edit === item.id ? (
              <div className={s.editTodo}>
                <input
                  className={s.inputTodo}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e, item.id)}
                  value={value}
                />
              </div>
            ) : (
              <div className={s.item} onClick={() => statusTodo(item.id)}>
                <div className={!item.status ? s.active : ""}>{item.title}</div>
                <div className={s.itemDate}>{item.date}</div>
              </div>
            )}

            {edit === item.id ? (
              <div>
                <button
                  className={`${s.btn} ${s.btnClose}`}
                  onClick={() => saveTodo(item.id)}
                >
                  Сохранить
                </button>
              </div>
            ) : (
              <div>
                <button className={s.btn} onClick={() => deleteTodo(item.id)}>
                  Удалить
                </button>
                <button
                  className={`${s.btn} ${s.btnEdit}`}
                  onClick={() => editTodo(item.id, item.title)}
                >
                  Редактировать
                </button>
                <button
                  className={`${s.btn} ${s.btnClose}`}
                  onClick={() => statusTodo(item.id)}
                >
                  {item.status ? "Закрыть" : "Открыть"}
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;
