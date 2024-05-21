import React, { useState } from 'react';

import { Thread } from '../models/Thread';

interface ThreadCardProps {
  group: Thread[];
}

export const ThreadCard: React.FC<ThreadCardProps> = ({ group }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const scoreClass = (score: number) => {
    return score <= 5 ? 'low-score' : 'high-score';
  };

  return (
    <div
      className={`thread-group ${expanded ? 'expanded' : 'collapsed'}`}
      onClick={handleExpand}
      style={{ '--index': 0 } as React.CSSProperties}
    >
      {group.map((thread, index) => (
        <div
          key={thread.id}
          className={`thread-card ${scoreClass(thread.score ?? 0)}`}
          style={
            !expanded && index > 0
              ? { marginTop: `${index * -40}px`, zIndex: 1000 - index }
              : {}
          }
        >
          {index === 0 && group.length > 1 && !expanded && (
            <div className="message-count">{group.length} messages</div>
          )}
          <h2 className="subject">{thread.subject}</h2>
          <p className="question">{thread.question}</p>
          <p className="text">{thread.text}</p>
          <div className="footer">
            <span className="team">{thread.team}</span>
            <span className="date">
              {new Date(thread.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
