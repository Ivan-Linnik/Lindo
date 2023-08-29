import todoListStyles from './TodoList.module.css';
import TodoItem from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={todoListStyles.todoList}>
      {!todos.length && (
        <div className={todoListStyles.emptyMessage}>Todo list is empty</div>
      )}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
