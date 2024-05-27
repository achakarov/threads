import { useEffect, useState } from 'react';

import { Thread } from '../../models/Thread';

import { getThreads } from '../../services/ThreadsApiService';

import { ThreadCard } from '../../components/ThreadCard';

export const HomePage = (): JSX.Element => {
  const [threadsGroups, setThreadsGroups] = useState<Thread[][]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const threads = await getThreads();
        setThreadsGroups(threads);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div className="main-container">
      <div className="threads-grid">
        {error ? (
          <div className="error">{error}</div>
        ) : threadsGroups.length === 0 ? (
          <div className="no-data">No data available</div>
        ) : (
          threadsGroups.map((group, index) => (
            <ThreadCard key={index} threadGroup={group} />
          ))
        )}
      </div>
    </div>
  );
};
