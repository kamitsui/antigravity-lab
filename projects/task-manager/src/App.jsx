import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '4rem' }}>
        <h1>Task Manager</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
          シンプルで美しいタスク管理
        </p>
      </header>

      <main>
        <TaskForm onAddTask={addTask} />

        <div style={{ marginTop: '2rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            fontWeight: 600
          }}>
            タスク一覧
          </h2>
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </div>
      </main>

      <footer style={{
        textAlign: 'center',
        marginTop: '4rem',
        paddingBottom: '2rem',
        color: 'var(--text-muted)'
      }}>
        <p>&copy; {new Date().getFullYear()} Task Manager App</p>
      </footer>
    </div>
  );
}

export default App;
