import { CiFileOff } from 'react-icons/ci';
import { CiEraser } from 'react-icons/ci';
import styles from './FuncButtons.module.css';
import Button from '../UI/Button';

function FuncButtons({
  eraseAllTodos,
  eraseCompletedTodos,
  totalTodos,
  completedTodos,
}) {
  return (
    <div className={styles.FuncButtons}>
      <Button onClick={() => eraseAllTodos()} title="Erase all todos">
        <CiFileOff />
      </Button>
      <Button
        onClick={() => eraseCompletedTodos()}
        title="Erase completed todos"
        disabled={!completedTodos && `${styles.disabled}`}
      >
        <CiEraser />
      </Button>
      <div className={styles.infoText}>
        <span className={styles.totalText}>{totalTodos} total</span>
        <span className={styles.completedText}>{completedTodos} completed</span>
      </div>
    </div>
  );
}

export default FuncButtons;
