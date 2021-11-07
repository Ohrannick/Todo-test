import s from "./Header.module.css";

function Header({ todo }) {
  return <div className={s.header}>Список задач: {todo.length}</div>;
}

export default Header;
