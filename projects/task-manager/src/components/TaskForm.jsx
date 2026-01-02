import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    onAddTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <input
          type="text"
          className="input-field"
          placeholder="新しいタスクを入力..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <button type="submit" className="btn">
          <span>追加</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
