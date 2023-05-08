import React, { useEffect, useRef } from 'react';

export function useIsMounted() {
  // your code here
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return () => isMounted.current;
}

// to try your code on the right panel
// export App() component like below

export function App() {
  const ref = useIsMounted();
  return <div ref={ref}>BFE.dev</div>;
}
