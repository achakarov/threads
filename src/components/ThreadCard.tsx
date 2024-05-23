import React, { useState } from 'react';

import { Thread } from '../models/Thread';

import { formatDate } from '../utils/helpers/threads';

interface ThreadCardProps {
  threadGroup: Thread[];
}

export const ThreadCard: React.FC<ThreadCardProps> = ({ threadGroup }) => {
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
      className={`thread-group ${expanded ? 'expanded' : 'collapsed'} `}
      onClick={handleExpand}
    >
      {threadGroup.map((thread, index) => (
        <div
          key={thread.id}
          className={`thread-card ${scoreClass(thread.score ?? 0)} ${
            expanded
              ? 'expanded-reply'
              : index > 0
              ? 'secondary-reply'
              : 'main-reply'
          }`}
          style={{ '--index': index } as React.CSSProperties}
        >
          {index === 0 && threadGroup.length > 1 && !expanded && (
            <div className="message-count">{threadGroup.length} messages</div>
          )}
          <div className="inner-container">
            <div className="left-side">
              <h2 className="subject">{thread.subject}</h2>
              <p className="question">{thread.question}</p>
              <p className="text">{thread.text}</p>
            </div>
            <div className="right-side">
              <span className="team">{thread.team}</span>
              <span className="date">{formatDate(thread.created_at)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
