import { useEffect } from 'react';

// Names the page in the tab while it is open, and hands the old name back.
export function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
