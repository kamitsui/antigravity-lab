function TaskItem({ task, onToggle, onDelete }) {
    return (
        <div
            className="glass-panel"
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                marginBottom: '1rem',
                transition: 'all 0.3s ease',
                opacity: task.completed ? 0.7 : 1,
                borderLeft: task.completed ? '4px solid var(--text-muted)' : '4px solid var(--accent-secondary)'
            }}
        >
            <label style={{ display: 'flex', alignItems: 'center', flex: 1, cursor: 'pointer' }}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    style={{
                        width: '1.2rem',
                        height: '1.2rem',
                        marginRight: '1rem',
                        accentColor: 'var(--accent-primary)',
                        cursor: 'pointer'
                    }}
                />
                <span style={{
                    fontSize: '1.1rem',
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'var(--text-muted)' : 'var(--text-primary)',
                    transition: 'all 0.2s ease'
                }}>
                    {task.text}
                </span>
            </label>

            <button
                onClick={() => onDelete(task.id)}
                className="btn"
                style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '0.5rem',
                    color: '#ef4444',
                    marginLeft: '1rem'
                }}
                aria-label="Delete"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
        </div>
    );
}

export default TaskItem;
