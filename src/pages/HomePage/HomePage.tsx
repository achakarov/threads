import { useEffect, useState } from 'react';

import { Thread } from '../../models/Thread';

import { getThreads } from '../../services/ThreadsApiService';

import { ThreadCard } from '../../components/ThreadCard';

export const HomePage = () => {
  const [threadsGroups, setThreadsGroups] = useState<Thread[][]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const threads = await getThreads();
        setThreadsGroups(threads);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div className="main-container">
      <div className="threads-grid">
        {error ? (
          <div className="error">{error}</div>
        ) : (
          threadsGroups.map((group, index) => (
            <ThreadCard key={index} group={group} />
          ))
        )}
      </div>
    </div>
  );
};
