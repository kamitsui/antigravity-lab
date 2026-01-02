import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div
                className="glass-panel"
                style={{
                    padding: '3rem',
                    textAlign: 'center',
                    color: 'var(--text-muted)'
                }}
            >
                <p style={{ fontSize: '1.1rem' }}>タスクがありません</p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>新しいタスクを追加して生産性を上げましょう✨</p>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;
