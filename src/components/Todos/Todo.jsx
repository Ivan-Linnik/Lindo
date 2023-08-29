import { GoTrash } from 'react-icons/go';
import { GoCheckCircle } from 'react-icons/go';
import { RxReset } from 'react-icons/rx';
import { CiStickyNote } from 'react-icons/ci';

import todoItemStyles from './Todo.module.css';

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const { text, id, isCompleted = false } = todo;
  return (
    <div
      className={
        isCompleted
          ? `${todoItemStyles.completedTodoItem} ${todoItemStyles.todoItem}`
          : todoItemStyles.todoItem
      }
      id={id}
    >
      <CiStickyNote className={todoItemStyles.itemIcon} />
      <div className={todoItemStyles.TodoText}>{text}</div>
      <div className={todoItemStyles.itemButtons}>
        <GoTrash
          className={todoItemStyles.removeBtn}
          onClick={() => deleteTodo(id)}
        />
        {isCompleted ? (
          <RxReset
            className={todoItemStyles.doneBtn}
            onClick={() => toggleTodo(id)}
          />
        ) : (
          <GoCheckCircle
            className={todoItemStyles.doneBtn}
            onClick={() => toggleTodo(id)}
          />
        )}
      </div>
    </div>
  );
}

export default TodoItem;
